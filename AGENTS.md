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
| `beklemishev` | Глава IV §1–2 (стр. 148) | Глава IV §3 (149+) | Главы VIII–IX complete + Гл.VII§3–4 (стр. 355–413) | Главы V–VI + Гл.VII§1-2 (149–340) |
| `gusyatnikov` | **BOOK COMPLETE** — Главы 1–4, стр. 6–228, both fronts met | — | — | — |
| `sbornik_zadach` | Глава 7 complete (стр. 174) | Глава 8 (175–190 per ToC) | Главы 11–14 complete (стр. 265–347) | Глава 10 (238–264 per ToC) |
| `reshebnik_beklemishev` | **BOOK COMPLETE** — Главы I–IX, стр. 5–190, both fronts met (2026-08-07) | — | — | — |

The gap still to fill in the middle of each book: `beklemishev` §3 Гл.IV + Гл.V–VI + Гл.VII§1-2 (149–340) · `gusyatnikov` — none, book finished · `sbornik_zadach` Гл.8–10 (175–264, ToC-only page estimates, not yet verified against the PDF — Глава 8: 175–190, Глава 9: 191–237, Глава 10: 238–264; even after a next round takes Гл.8 forward and Гл.10 backward, Глава 9 (191–237) would remain as a middle-middle pocket) · `reshebnik_beklemishev` — none, book finished (closed 2026-08-07).

Last full round: 2026-08-07 (fourth dual-front round). Ran 6 agents in parallel (forward+backward × 3 remaining books; `gusyatnikov` already done, no agents needed). All 6 succeeded, no network failures this round. `reshebnik_beklemishev` closed completely — its two fronts met from opposite ends of Chapter VI/VII. One data-quality issue surfaced (not a process error): `reshebnik_beklemishev/rbek_g04_s02.md` (from an earlier round, before `beklemishev`'s own Глава IV had been transcribed) links to a guessed section title "Аффинные преобразования" and has 13 solved exercises — but the newly-transcribed real textbook §2 is titled "Линейные преобразования" and has only 12 exercises (§3, not yet transcribed, is the real "Аффинные преобразования"). Fixed the link/title; left the exercise-count mismatch flagged in-file (`> [!warning]`) rather than editing solved math content on a guess — needs a page-by-page recheck against the решебник PDF in a future round. General lesson: guessed cross-book slugs/titles for not-yet-transcribed sections (allowed by the linking convention) can drift from the real section title/scope once that section is actually transcribed — worth a quick title/count sanity check whenever a forward-referenced file is finally created.

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
