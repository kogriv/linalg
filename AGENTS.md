# Agent Notes — linalg (Obsidian vault submodule)

Public git submodule (`kogriv/linalg`) of a private Obsidian vault (`Obsidian_vault_android`). Focus: linear algebra / analytic geometry notes.

## Book conversion convention

Full convention (file naming, page markers, assets layout) lives in `angem/README.md` — read it before adding or editing book notes. Summary:

- One `.md` file per book chapter+section (`§`), not per page: `{автор}_g{глава:02d}_s{параграф:02d}_{слаг}.md`.
- Page boundaries marked inline: `---` / `**стр. N**` / `---`, so pagination parity with the source book is preserved even though files span multiple pages.
- Figures/scans go only in `assets/{md-file-stem}/p{page}-fig{n}.ext`, never loose next to the `.md` files. Extract embedded page images from source PDFs with `pdfimages -f N -l N -png file.pdf out` (check `pdfimages -list` first — page renders often include a tiny 1×1 stencil mask alongside the real figure).
- **DjVu sources**: the embedded text layer (`djvutxt`) is noisy OCR (garbled Cyrillic, mangled indices/subscripts) — don't transcribe from it. Instead render the page as an image and read/transcribe by hand: `ddjvu -format=ppm -page=N file.djvu out.ppm`, then `python3 -c "from PIL import Image; Image.open('out.ppm').save('out.png')"` (Pillow is already available via system `python3`). Package `djvulibre-bin` provides `djvutxt`/`ddjvu`/`djvudump`.

Books in progress:
- `angem/beklemishev/` — Беклемишев, «Курс аналитической геометрии и линейной алгебры», theory (source PDF: `/root/download/ya_disk/Books/Math/АнГем/`).
- `angem/gusyatnikov/` — Гусятников, Резниченко, «Векторная алгебра в примерах и задачах», worked examples (source DjVu, same folder).
- `angem/sbornik_zadach/` — Беклемишева и др., «Сборник задач по аналитической геометрии и линейной алгебре», problem set matching Beklemishev's textbook chapter-for-chapter, same editor (source PDF, same folder). Its own worked solutions (marked **(р)** in problem statements) live in per-chapter `sbz_g{NN}_resheniya.md` files, not inline with the problem statements — the source book itself keeps them in a separate back-of-book section out of chapter order.
- `angem/reshebnik_beklemishev/` — Беклемишев, «Решение задач из курса аналитической геометрии и линейной алгебры», solutions to the *textbook's* own exercises, 1:1 chapter/§ structure match with `angem/beklemishev/` (source PDF, same folder).

Full-parity policy for this book front (2026-07-22): when a textbook §'s exercises are transcribed, also transcribe the matching Решебник section; when a Сборник задач § is transcribed, also transcribe its **(р)**-marked solutions. Cross-link both directions (problem → solution, solution → problem). Don't bulk-fetch "Ответы и указания" (brief answers, ~90 pages, covers every problem) unless separately asked — out of scope for now.

### Current progress (updated after each round — check each book's own README "Файлы" list for full detail, this is just the resume point)

Since 2026-07-24 each book is worked from **two fronts converging toward the middle** (see workflow below) — a forward front (continuing from the start) and a backward front (starting from the book's last chapter). Both are tracked per book:

| Book | Forward front: done through | Forward next up | Backward front: done through | Backward next up |
|---|---|---|---|---|
| `beklemishev` | Глава III §2 (стр. 108) | Глава III §3–4 (109+) | Глава IX complete (стр. 375–413, last chapter) | Глава VIII (355–374) |
| `gusyatnikov` | Глава 3 §2 (стр. 141) | Глава 3 §3–4 (141+) | Глава 4 complete (стр. 178–228, last chapter) | Глава 3 §3–4 (141–178) — **fronts meet here next round** |
| `sbornik_zadach` | Глава 5 complete (стр. 126) | Глава 6 §14–16 (127+) | Глава 13–14 complete (стр. 307–347) | Глава 12 §31–32 (285–306) |
| `reshebnik_beklemishev` | Глава V complete (стр. 96) | Глава VI §1–7 (97+) | Глава VIII–IX complete (стр. 174–190, end of book) | Глава VII §1–4 (135–173) |

The gap still to fill in the middle of each book: `beklemishev` Гл.III§3–VIII (109–374) · `gusyatnikov` Гл.3§3-4 (141–178, **both fronts converge on this same range next round**) · `sbornik_zadach` Гл.6–12 (127–306) · `reshebnik_beklemishev` Гл.VI–VII (97–173).

Last full round: 2026-07-25. Ran 8 agents in parallel (forward+backward × 4 books) two rounds running now — pattern holds up well, only isolated network failures (handled by relaunching with the same brief).

### Parallel conversion workflow (how progress gets made — for a session picking this back up)

This book front is advanced by running background Agents in parallel each round (see the Agent tool), not sequentially by hand. Pattern that's worked across ~6 rounds so far, most recently doubling to 8 agents (forward + backward per book):

1. Check the table above (or each book's README) to find where each front left off.
2. Size each chunk to keep parallel workloads roughly comparable — NOT always "next 1 section": some books' §s run 3 pages, others 25+. Aim for ~15–25 pages per agent per round; bundle multiple short §s into one agent call, or hand a single long § to one agent alone. Prefer stopping at a chapter boundary when a chunk of that size lands near one.
3. Brief each agent with: read `AGENTS.md` first, read the target book's own README + 1-2 existing files in it as style reference, exact source file path + page range to verify (don't trust TOC page numbers blindly, confirm by reading), the page-marker/asset/figure-extraction workflow (PDF vs DjVu differs — see above), and hard boundaries: only touch its own book folder, never `angem/README.md` or this `AGENTS.md`, never run git commands.
4. **When running 2+ agents in the SAME book folder concurrently** (forward + backward front): tell BOTH agents to NOT edit their book's own `README.md` — concurrent edits to the same file race and can lose one agent's change. Have each agent report back the exact README lines to add; merge them yourself once all agents in that book are done.
5. After all agents report back, spot-check a sample of the actual files/figures against the source PDF/DjVu yourself before committing (agents self-flag uncertain judgment calls — e.g. corrected typos, ambiguous OCR, sign errors, discrepancies like an unmarked problem having a solution in the back matter — verify those specifically, don't just trust the self-report). Fix any cross-file link mismatches (agents sometimes guess slightly different slugs for not-yet-created files in other books).
6. Commit everything in `linalg` in one commit, push (dual remote: GitHub + GitLab), then bump the submodule pointer in the parent vault repo and push that too. Update the progress table above, including both fronts' new positions and the shrinking middle gap.
7. If an agent run fails outright (network/API error, not a content problem), just relaunch it with the same brief — mention any stray partial files it left (incomplete figure crops etc.) so it can decide whether to reuse or redo them, rather than re-deriving everything from scratch. Network failures have hit ~1-4 agents per round in two separate rounds so far — always expect and check for this before assuming a round is fully done.

## LaTeX in chat vs. in files

- **In files**: keep raw LaTeX (`$...$`, `$$...$$`) — Obsidian renders it natively via MathJax.
- **In chat replies**: the terminal does not render LaTeX. Pipe formulas through `l2u` (`/root/.local/bin/l2u`, backed by venv `/root/venvs/l2u`, wraps `pylatexenc` + unicode sub/superscript post-processing) before including them in a response, e.g. `l2u 'text with $\alpha_1^2$ inside'`.

## Git

Vault + submodule files are owned by uid 10242 (not root), which trips git's dubious-ownership check. If `git status`/`git log` here or in the parent vault fail with "detected dubious ownership", add the path via `git config --global --add safe.directory <path>` (already done as of 2026-07-22 for the vault root, `linalg`, and `obsinfra`).
