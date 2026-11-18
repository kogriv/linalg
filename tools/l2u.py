#!/usr/bin/env python3
"""l2u: LaTeX -> Unicode для чтения формул в консоли.

    l2u '\\sigma_3 \\le x^2'          -> σ₃ ≤ x²       (аргумент без $ = формула)
    l2u 'Пара $(a,b)$ в $\\sigma_3$'  -> Пара (a,b) в σ₃  (есть $ = текст с формулами)
    l2u file.md                      -> весь файл, формулы в $...$/$$...$$ переведены
    cat file.md | l2u                -> то же из stdin
    -m / -t  принудительно: формула / текст
    -p       корень со скобками √(x²+1) вместо черты √x̅²̅+̅1̅

Таблица символов взята из unicodeit (data.REPLACEMENTS, SUBSUPERSCRIPTS),
команды сопоставляются только целиком (без порчи \\lg -> łg). Структура
(\\frac, \\sqrt, ^, _, \\text, \\mathbf, \\mathbb, пробелы) разбирается здесь.
"""
import os
import re
import sys
import unicodedata

from unicodeit import data as _ud

# ---------- таблицы ----------
SYM = {k[1:]: v for k, v in _ud.REPLACEMENTS if re.fullmatch(r"\\[A-Za-z]+", k)}
SYM.update({
    "le": "≤", "ge": "≥", "leqslant": "⩽", "geqslant": "⩾", "ne": "≠", "neq": "≠",
    "iff": "⇔", "implies": "⇒", "impliedby": "⇐", "to": "→", "mapsto": "↦",
    "Leftrightarrow": "⇔", "Rightarrow": "⇒", "Leftarrow": "⇐",
    "cdot": "·", "cdots": "⋯", "ldots": "…", "dots": "…", "vdots": "⋮", "ddots": "⋱",
    "times": "×", "pm": "±", "mp": "∓", "infty": "∞", "varnothing": "∅", "emptyset": "∅",
    "in": "∈", "notin": "∉", "ni": "∋", "subset": "⊂", "subseteq": "⊆", "supset": "⊃",
    "supseteq": "⊇", "cup": "∪", "cap": "∩", "setminus": "∖", "forall": "∀", "exists": "∃",
    "neg": "¬", "lnot": "¬", "land": "∧", "lor": "∨", "wedge": "∧", "vee": "∨",
    "perp": "⊥", "parallel": "∥", "mid": "∣", "nmid": "∤", "circ": "∘", "partial": "∂",
    "nabla": "∇", "sum": "∑", "prod": "∏", "int": "∫", "oint": "∮", "approx": "≈",
    "equiv": "≡", "sim": "∼", "cong": "≅", "propto": "∝", "ll": "≪", "gg": "≫",
    "langle": "⟨", "rangle": "⟩", "lfloor": "⌊", "rfloor": "⌋", "lceil": "⌈", "rceil": "⌉",
    "{": "{", "}": "}", "%": "%", "$": "$", "&": "&", "#": "#", "_": "_",
    "|": "‖", "lbrace": "{", "rbrace": "}", "vert": "|", "Vert": "‖", "backslash": "\\",
    "aleph": "ℵ", "ell": "ℓ", "hbar": "ℏ", "Re": "ℜ", "Im": "ℑ", "wp": "℘", "prime": "′",
    "deg": "°", "angle": "∠", "triangle": "△", "square": "□", "blacksquare": "■", "qed": "∎",
    "varepsilon": "ε", "epsilon": "ϵ", "varphi": "φ", "phi": "ϕ", "vartheta": "ϑ",
})
# имена функций: печатаются как есть
FUNCS = set("""sin cos tan tg cot ctg sec csc arcsin arccos arctan arctg arcctg sinh cosh
tanh th sh ch cth arsinh arcosh artanh log lg ln exp lim limsup liminf sup inf max min
arg deg det dim ker gcd lcm hom Hom mod bmod rank sign sgn tr Im Re Pr""".split())
SPACES = {",": " ", ";": " ", ":": " ", "!": "", " ": " ", "quad": "  ", "qquad": "    ",
          "enspace": " ", "thinspace": " ", "medspace": " ", "thickspace": " "}
DROP = {"left", "right", "big", "Big", "bigg", "Bigg", "bigl", "bigr", "Bigl", "Bigr",
        "displaystyle", "textstyle", "scriptstyle", "limits", "nolimits", "nonumber",
        "notag", "middle"}
TEXTLIKE = {"text", "textrm", "textit", "textbf", "mathrm", "mathit", "operatorname",
            "textnormal", "mbox", "hbox", "textup", "emph", "mathsf", "texttt", "mathtt"}

SUP, SUB = {}, {}
for k, v in _ud.SUBSUPERSCRIPTS:
    (SUP if k[0] == "^" else SUB)[k[1:]] = v
SUP.update({"-": "⁻", "+": "⁺", "=": "⁼", "(": "⁽", ")": "⁾", "−": "⁻", "′": "′", "*": "*"})
SUB.update({"-": "₋", "+": "₊", "=": "₌", "(": "₍", ")": "₎", "−": "₋"})
SUP.update({"T": "ᵀ", "∗": "*", "∘": "°", "′": "′"})

SQRT_STYLE = "bar"  # "bar": √x̅²̅+̅1̅ (черта U+0305), "paren": √(x²+1); флаг -p

BB = {"R": "ℝ", "N": "ℕ", "Z": "ℤ", "Q": "ℚ", "C": "ℂ", "P": "ℙ", "H": "ℍ"}


def _alpha(style, ch):
    if style == "bb" and ch in BB:
        return BB[ch]
    names = {"bf": "BOLD", "bb": "DOUBLE-STRUCK", "cal": "SCRIPT", "frak": "FRAKTUR",
             "it": "ITALIC", "sf": "SANS-SERIF"}
    kind = "CAPITAL" if ch.isupper() else "SMALL"
    try:
        if ch.isdigit():
            return unicodedata.lookup(f"MATHEMATICAL {names[style]} DIGIT {unicodedata.name(ch).split()[-1]}")
        return unicodedata.lookup(f"MATHEMATICAL {names[style]} {kind} {ch.upper()}")
    except (KeyError, ValueError):
        return ch


STYLES = {"mathbf": "bf", "boldsymbol": "bf", "bm": "bf", "mathbb": "bb", "Bbb": "bb",
          "mathcal": "cal", "mathscr": "cal", "mathfrak": "frak"}


# ---------- разбор ----------
class P:
    def __init__(self, s):
        self.s, self.i = s, 0

    def peek(self):
        return self.s[self.i] if self.i < len(self.s) else ""

    def skip_ws(self):
        while self.peek().isspace():
            self.i += 1

    def group_raw(self):
        """Содержимое {…} (с вложенностью) или один «атом»; вернуть сырую строку."""
        self.skip_ws()
        c = self.peek()
        if c == "{":
            depth, j = 0, self.i
            while j < len(self.s):
                if self.s[j] == "\\":
                    j += 2
                    continue
                if self.s[j] == "{":
                    depth += 1
                elif self.s[j] == "}":
                    depth -= 1
                    if depth == 0:
                        raw = self.s[self.i + 1:j]
                        self.i = j + 1
                        return raw
                j += 1
            raw = self.s[self.i + 1:]
            self.i = len(self.s)
            return raw
        if c == "\\":
            m = re.compile(r"\\([A-Za-z]+|.)").match(self.s, self.i)
            self.i = m.end()
            return m.group(0)
        self.i += 1
        return c

    def opt_raw(self):
        self.skip_ws()
        if self.peek() != "[":
            return None
        j = self.s.find("]", self.i)
        raw = self.s[self.i + 1:j]
        self.i = j + 1
        return raw


def _needs_paren(t):
    t = t.strip()
    if len(t) <= 1:
        return False
    if re.fullmatch(r"[0-9.,]+|[A-Za-zα-ωΑ-Ω]|[A-Za-z]+", t):
        return False
    if t[0] in "([{⟨|" and t[-1] in ")]}⟩|" and _balanced_outer(t):
        return False
    return True


def _balanced_outer(t):
    pairs = {"(": ")", "[": "]", "{": "}", "⟨": "⟩", "|": "|"}
    if pairs.get(t[0]) != t[-1]:
        return False
    depth = 0
    for k, ch in enumerate(t):
        if ch == t[0] and (t[0] != "|" or k == 0):
            depth += 1
        elif ch == t[-1]:
            depth -= 1
            if depth == 0 and k != len(t) - 1:
                return False
    return True


def _paren(t):
    return f"({t})" if _needs_paren(t) else t


def _script(t, table, mark):
    t = t.strip()
    if t and all(ch in table for ch in t):
        return "".join(table[ch] for ch in t)
    return f"{mark}{t}" if len(t) == 1 else f"{mark}({t})"


def math(s):
    p = P(s)
    out = []
    while p.i < len(s):
        c = p.peek()
        if c == "\\":
            m = re.compile(r"\\([A-Za-z]+|.)").match(s, p.i)
            name = m.group(1)
            p.i = m.end()
            if name in SPACES:
                out.append(SPACES[name])
            elif name in DROP:
                pass
            elif name in ("frac", "dfrac", "tfrac", "cfrac"):
                a, b = math(p.group_raw()), math(p.group_raw())
                out.append(f"{_paren(a)}/{_paren(b)}")
            elif name == "sqrt":
                n = p.opt_raw()
                a = math(p.group_raw())
                root = {"3": "∛", "4": "∜"}.get(n, (_script(math(n), SUP, "^") if n else "") + "√")
                if SQRT_STYLE == "bar":
                    a = a.strip()
                    out.append(root + "".join(ch if unicodedata.combining(ch) else ch + "̅" for ch in a))
                else:
                    out.append(root + _paren(a))
            elif name in TEXTLIKE:
                out.append(text_in_math(p.group_raw()))
            elif name in STYLES:
                out.append("".join(_alpha(STYLES[name], ch) for ch in math(p.group_raw())))
            elif name in ("overline", "bar"):
                out.append("".join(ch + "̅" for ch in math(p.group_raw())))
            elif name in ("vec", "overrightarrow"):
                a = math(p.group_raw())
                out.append(a + "⃗" if len(a) == 1 else f"→{a}")
            elif name in ("hat", "widehat"):
                out.append("".join(ch + "̂" for ch in math(p.group_raw())))
            elif name in ("tilde", "widetilde"):
                out.append("".join(ch + "̃" for ch in math(p.group_raw())))
            elif name == "dot":
                out.append(math(p.group_raw()) + "̇")
            elif name in ("begin", "end"):
                env = p.group_raw()
                if env in ("array", "tabular") and name == "begin":
                    p.group_raw()
                out.append({"pmatrix": "(", "bmatrix": "[", "vmatrix": "|"}.get(env, "") if name == "begin"
                           else {"pmatrix": ")", "bmatrix": "]", "vmatrix": "|"}.get(env, ""))
            elif name in ("tag", "eqno"):
                a = p.group_raw() if name == "tag" else s[p.i:].strip()
                if name == "eqno":
                    p.i = len(s)
                out.append(f"   ({math(a).strip('() ')})")
            elif name in FUNCS:
                prev = "".join(out)[-1:]
                out.append(" " + name if prev.isalnum() else name)
                p.skip_ws()
                if re.match(r"\\[dt]?frac", s[p.i:]):
                    m2 = re.compile(r"\\[dt]?frac").match(s, p.i)
                    p.i = m2.end()
                    a, b = math(p.group_raw()), math(p.group_raw())
                    out.append(f"({_paren(a)}/{_paren(b)})")
                elif p.peek().isalnum() or p.peek() == "\\":
                    out.append(" ")
            elif name in SYM:
                v = SYM[name]
                out.append(v)
            else:
                out.append(name)  # неизвестная команда: имя без обратной косой
        elif c in "^_":
            p.i += 1
            raw = p.group_raw()
            if raw[:1] == "\\" and raw[1:] in (TEXTLIKE | set(STYLES)):
                raw = raw + "{" + p.group_raw() + "}"
            arg = math(raw)
            out.append(_script(arg, SUP if c == "^" else SUB, c))
        elif c in "{}":
            p.i += 1
        elif c == "&":
            p.i += 1
            out.append("  ")
        elif c == "~":
            p.i += 1
            out.append(" ")
        elif c == "-" and not s.startswith("--", p.i):
            p.i += 1
            out.append("−")
        elif c == "'":
            p.i += 1
            out.append("′")
        else:
            p.i += 1
            out.append(c)
    r = "".join(out)
    r = r.replace("\\\\", "; ")
    return re.sub(r"[ \t]{2,}", lambda m: m.group(0) if len(m.group(0)) >= 3 else " ", r)


def text_in_math(raw):
    # \text{…} может сам содержать $…$
    return re.sub(r"\$(.+?)\$", lambda m: math(m.group(1)), raw)


MATH_RE = re.compile(
    r"(?<!\\)\$\$(.+?)(?<!\\)\$\$"          # $$…$$
    r"|\\\[(.+?)\\\]"                        # \[…\]
    r"|\\\((.+?)\\\)"                        # \(…\)
    r"|(?<![\\$])\$(?!\s)((?:\\\$|[^$])+?)(?<![\s\\])\$(?!\$)",  # $…$
    re.S,
)


def text(s):
    def rep(m):
        body = next(g for g in m.groups() if g is not None)
        r = math(body).strip()
        if m.group(1) is not None or m.group(2) is not None:
            return r if "\n" not in m.group(0) else "\n    " + r.replace("\n", " ") + "\n"
        return r
    # кодовые блоки ``` и `…` оставляем как есть
    parts = re.split(r"(```.*?```|`[^`\n]*`)", s, flags=re.S)
    return "".join(pt if pt.startswith("`") else MATH_RE.sub(rep, pt).replace("\\$", "$") for pt in parts)


def main(argv):
    global SQRT_STYLE
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    mode = None
    args = []
    for a in argv:
        if a in ("-m", "--math"):
            mode = "m"
        elif a in ("-t", "--text"):
            mode = "t"
        elif a in ("-p", "--paren-sqrt"):
            SQRT_STYLE = "paren"
        elif a in ("-h", "--help"):
            print(__doc__)
            return 0
        else:
            args.append(a)
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    if args and all(os.path.isfile(a) for a in args):
        for a in args:
            with open(a, encoding="utf-8") as f:
                sys.stdout.write(math(f.read()) if mode == "m" else text(f.read()))
        return 0
    if args:
        src = " ".join(args)
    else:
        if hasattr(sys.stdin, "reconfigure"):
            sys.stdin.reconfigure(encoding="utf-8")
        src = sys.stdin.read()
    if mode is None:
        mode = "t" if ("$" in src or "\\(" in src or "\\[" in src or not args) else "m"
    sys.stdout.write(math(src) if mode == "m" else text(src))
    if args and not src.endswith("\n"):
        sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
