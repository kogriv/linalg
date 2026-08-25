# Agent Notes — linalg (Obsidian vault submodule)

Public git submodule (`kogriv/linalg`) of a private Obsidian vault (`Obsidian_vault_android`). Focus: linear algebra / analytic geometry notes.

## Book conversion convention

Full convention (file naming, page markers, assets layout) lives in `angem/README.md` — read it before adding or editing book notes. Summary:

- One `.md` file per book chapter+section (`§`), not per page: `{автор}_g{глава:02d}_s{параграф:02d}_{слаг}.md`.
- Page boundaries marked inline: `---` / `**стр. N**` / `---`, so pagination parity with the source book is preserved even though files span multiple pages.
- Figures/scans go only in `assets/{md-file-stem}/p{page}-fig{n}.ext`, never loose next to the `.md` files. Extract embedded page images from source PDFs with `pdfimages -f N -l N -png file.pdf out` (check `pdfimages -list` first — page renders often include a tiny 1×1 stencil mask alongside the real figure).
- **DjVu sources**: the embedded text layer (`djvutxt`) is noisy OCR (garbled Cyrillic, mangled indices/subscripts) — don't transcribe from it. Instead render the page as an image and read/transcribe by hand: `ddjvu -format=ppm -page=N file.djvu out.ppm`, then `python3 -c "from PIL import Image; Image.open('out.ppm').save('out.png')"` (Pillow is already available via system `python3`). Package `djvulibre-bin` provides `djvutxt`/`ddjvu`/`djvudump`.

Since 2026-08-08 these files are not written by hand or by an ad-hoc agent: they are produced by the **apokrif** harness (see below), which decides file boundaries deterministically from a per-book `toc.json`, not by LLM judgment. The convention above is still the contract — apokrif's merge step is what enforces it.

Books:
- `angem/beklemishev/` — Беклемишев, «Курс аналитической геометрии и линейной алгебры», theory (source PDF: `/root/download/ya_disk/Books/Math/АнГем/`).
- `angem/gusyatnikov/` — Гусятников, Резниченко, «Векторная алгебра в примерах и задачах», worked examples (source DjVu, same folder).
- `angem/sbornik_zadach/` — Беклемишева и др., «Сборник задач по аналитической геометрии и линейной алгебре», problem set matching Beklemishev's textbook chapter-for-chapter, same editor (source PDF, same folder). Its own worked solutions (marked **(р)** in problem statements) live in per-chapter `sbz_g{NN}_resheniya.md` files, not inline with the problem statements — the source book itself keeps them in a separate back-of-book section out of chapter order.
- `angem/reshebnik_beklemishev/` — Беклемишев, «Решение задач из курса аналитической геометрии и линейной алгебры», solutions to the *textbook's* own exercises, 1:1 chapter/§ structure match with `angem/beklemishev/` (source PDF, same folder).
- `angem/streng/` — Стренг, «Линейная алгебра и её применения» (Mir, 1980), applied/computational course (source DjVu, same folder; file page = printed page + 5).
- `angem/efimov_vysshaya/` — Ефимов, «Высшая геометрия» (Наука, 1971), foundations of geometry, Lobachevsky/Riemann, projective geometry (source PDF: `.../АнГем/геом_доп/`; file page = printed page).

Full-parity policy for the Beklemishev front (2026-07-22): when a textbook §'s exercises are transcribed, also transcribe the matching Решебник section; when a Сборник задач § is transcribed, also transcribe its **(р)**-marked solutions. Cross-link both directions (problem → solution, solution → problem). Don't bulk-fetch "Ответы и указания" (brief answers, ~90 pages, covers every problem) unless separately asked — out of scope for now.

### Current progress (updated 2026-08-25 — each book's own README "Файлы" list is the detailed truth, this is just the resume point)

| Book | Status |
|---|---|
| `beklemishev` | **BOOK COMPLETE** — Главы I–IX, стр. 5–413 (2026-08-07) |
| `gusyatnikov` | **BOOK COMPLETE** — Главы 1–4, стр. 6–228 |
| `sbornik_zadach` | **BOOK COMPLETE** — Главы 1–14, стр. 7–372 (2026-08-07) |
| `reshebnik_beklemishev` | **BOOK COMPLETE** — Главы I–IX, стр. 5–190 (2026-08-07) |
| `streng` | покрыто — 239/459 стр. Готово: вступительные (стр. −4…6), Гл. 1–2 (11–124), §3.1–3.2 (125–145), §4.1–4.3 (182–195), Гл. 8 (353–431, см. баг ниже). Форвард-фронт: следующий батч 432–437, до конца файла ~22 стр. Пропуски в середине: 7–10, 146–181, 196–352 |
| `efimov_vysshaya` | покрыто — 167/576 стр. Готово: Гл. I (9–40), Гл. II п.1–7 (41–79), Гл. V п.1–9 (242–337). Форвард-фронт: следующий батч 338–343. Пропуск в середине: 80–241; хвост 338–576 |

Both in-progress books were started from two fronts (a forward front from the beginning, a backward front from a later chapter), which is why their coverage has holes in the middle — those are planned work, not losses. `apokrif run --book <id> --fill-gaps` plans batches into exactly those holes; a plain `apokrif run --book <id>` continues the forward front.

**Frozen on the HP host only, runnable here.** The 2026-08-24 decision (`apokrif/BACKLOG.md` п.46) froze both books on the machine that has no scans of them; the Termux host has both sources, the `cursor-agent` backend, and — since 2026-08-25 — a registry that no longer points at the wrong machine. Nothing blocks a resume here; the next batch is a real next step, not a historical marker.

Coverage numbers here were computed directly from the page markers in the files, which works anywhere:

```bash
cd angem && grep -h -o '^\*\*стр\. -\?[0-9]\+\*\*' streng/*.md | grep -o '\-\?[0-9]\+' | sort -n | uniq | wc -l
```

`apokrif state --book <id>` gives the same numbers plus the next batch, but only on the host whose paths are in `books/candidates.tsv` (see below).

**Backend:** both in-progress books are transcribed with `cursor:composer-2.5`. `agy:gemini` is deprecated for this project — on dense pages of Ефимов it silently dropped up to 80% of the text with no flag at all, and hardening the harness didn't fix it (details in `apokrif/AGENTS.md`).

## How progress is made now — the apokrif harness (since 2026-08-08)

Lives OUTSIDE the vault, at `/root/notes/pro/apokrif` (private repo `kogriv/apokrif`) — read its `README.md` and `AGENTS.md` before running anything. Read-only rule for this side: **apokrif writes into `angem/<book>/`, agents working in the vault do not hand-patch pages that apokrif is about to re-merge.** Also check the local clone isn't behind its remote before a run.

**Two hosts, and how the harness now handles that.** apokrif runs on two machines — this Termux host and an HP one (`/data/obsidian_vaults/obsi_vault_hp/...`) — with different paths to the vault and to the scan library. Until 2026-08-25 `books/candidates.tsv` held absolute paths, so it was correct on exactly one machine at a time: the 2026-08-16 move to HP broke every book lookup here (`apokrif state --book streng` → `FileNotFoundError`), which is also what produced the freeze decision above.

Fixed in apokrif (GF18): the registry now stores `{books}/…` and `{vault}/…`, and each machine says once where those point — `apokrif roots set vault <path>` / `apokrif roots set books <path>`, stored in `~/.config/apokrif/roots.tsv`, outside git. Both roots are already configured on this host. What this means for a session working here:

- Don't paste an absolute path into the registry to "make it work" — that is the exact move that breaks the other machine, and it now fails apokrif's test suite.
- A book whose scan is absent on this machine (`selivanov`) is not a defect: `run.sh` stops on "Файл не найден", tests skip it. Availability is a property of the pair (book, machine) and is computed, not declared.
- `apokrif roots` shows what resolves here; `apokrif roots detect` proposes candidates when a new machine joins.

One round = one command:

```bash
cd /root/notes/pro/apokrif
python3 apokrif run --book <id>                # forward front, next batch
python3 apokrif run --book <id> --fill-gaps    # plan into known holes instead
python3 apokrif run --book <id> --pages 100-120
```

which chains: transcription by a terminal LLM backend → `validate.sh` (mechanical checks) → auto-fix → a `fix.md` pass on whatever is left → deterministic `merge.py` into the vault, under a per-book lock and a budget ceiling, with an escalation journal. File and figure boundaries come from `books/<id>_toc.json`, never from the model. Onboarding a new book is `apokrif preflight <id> --vault-dir <path>` (creates the vault folder, `README.md`, `toc.json`); the candidate registry is `books/candidates.tsv` — three more books are listed there and not started (Бортаковский/Пантелеев, «Геометрия на плоскости», `gusyatnikov_ref`).

The core lesson the harness exists for: **never trust a backend's own report of what it did, check the filesystem.** A backend once wrote a clean markdown page listing five figures it had "cut out", none of which existed anywhere on disk. Hence `validate.sh` on every run.

After a round, the human/agent side still owns: spot-checking self-flagged uncertain spots against the source scan, fixing cross-file link slugs, updating the book's `README.md` "Файлы" list, then committing here and bumping the submodule pointer in the vault (see **Git** below).

### Historical: the dual-front parallel-agent workflow (2026-07-24 … 2026-08-07)

The four completed books were converted before apokrif existed, by launching background Agents in parallel each round — a forward front and a backward front per book, ~15–25 pages per agent, converging toward the middle; agents were forbidden to touch `angem/README.md`, this file, or git, and reported README lines back for a human merge (concurrent edits to one README race). Eight rounds, roughly 1000 printed pages. Kept here as context for why the finished books look the way they do; **the current path for new pages is apokrif, not this.**

## Open follow-ups (none urgent, all real)

- **`streng` — appendix pages are being merged into the wrong file.** `books/streng_toc.json` stops at §8.5 (стр. 395) and has no entries for Приложение A (407), Приложение B (416), Список литературы (423), Решения (424), Указатель (446). So everything from стр. 407 onward lands in `streng_g08_s05_teoriya_igr_i_teorema_o_minimakse.md` — verified: стр. 408+ of that file is Приложение A text (линейные преобразования, базисы), not game theory. Recent commit messages calling стр. 408–431 "§8.5" repeat the same mislabeling. Fix = add the back-matter entries to `toc.json`, then split the file and re-point the README.
- Textbook/решебник exercise-count mismatches, 5 instances, all flagged in-file with `⚠`/parentheticals, none reconciled against the решебник PDF page-by-page: `beklemishev/bekl_g04_s02_lineynye_preobrazovaniya.md` 12 vs 13, `bekl_g04_s03_affinnye_preobrazovaniya.md` 9 vs 8, `bekl_g05_s03_rang_matritsy.md` 6 vs 8, `bekl_g05_s06_sistemy_lineynykh_uravneniy_obshchaya_teoriya.md` 8 vs 9*, `bekl_g06_s04_zadacha_o_sobstvennykh_vektorakh.md` bonus 14* not in textbook (plus `bekl_g07_s02_...` solving bonus 7*/11*). These are real content discrepancies (extra or substituted problems), not transcription errors — worth a dedicated audit pass.
- `sbornik_zadach/sbz_g09_s24_invariantnye_podprostranstva.md` has several cross-references to §23 problems left as plain text because §23's file didn't exist yet in that round — can be upgraded to wikilinks now that `sbz_g09_s23_osnovnye_svoystva_lineynykh_otobrazheniy.md` exists.

## LaTeX in chat vs. in files

- **In files**: keep raw LaTeX (`$...$`, `$$...$$`) — Obsidian renders it natively via MathJax.
- **In chat replies**: the terminal does not render LaTeX. Pipe formulas through `l2u` (`/root/.local/bin/l2u`, backed by venv `/root/venvs/l2u`, wraps `pylatexenc` + unicode sub/superscript post-processing) before including them in a response, e.g. `l2u 'text with $\alpha_1^2$ inside'`.

## Git

**Since 2026-08-01, git is the ONLY sync transport for this vault.** The Remotely Save plugin was removed (vault commit `f0c07fc`) and WebDAV (Яндекс.Диск) is no longer in the loop — nothing carries files between devices except `git pull` / `git push`. Practical consequences: work that isn't committed and pushed does not exist on the other devices, and "wait for the file sync to settle" steps in the older `obsinfra/` guides are obsolete.

- `linalg` pushes to a dual remote: `origin` fetches from GitHub, pushes to both GitHub and GitLab (`git remote -v` to confirm). Same for the vault itself and `obsinfra`.
- Round finish = commit here → push → bump the submodule pointer in the parent vault (`git add linalg && git commit && git push`).
- Sibling submodules of the same vault: `obsinfra` (public, vault infra docs) and `volya` (**private**, psychology books, converted with the same apokrif conventions). Don't put anything private in `linalg` — it is a public repo.
- Vault + submodule files are owned by uid 10242 (not root), which trips git's dubious-ownership check. If `git status`/`git log` fails with "detected dubious ownership", add the path via `git config --global --add safe.directory <path>` (already done for the vault root, `linalg`, `obsinfra`, `volya`).
