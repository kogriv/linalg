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

## LaTeX in chat vs. in files

- **In files**: keep raw LaTeX (`$...$`, `$$...$$`) — Obsidian renders it natively via MathJax.
- **In chat replies**: the terminal does not render LaTeX. Pipe formulas through `l2u` (`/root/.local/bin/l2u`, backed by venv `/root/venvs/l2u`, wraps `pylatexenc` + unicode sub/superscript post-processing) before including them in a response, e.g. `l2u 'text with $\alpha_1^2$ inside'`.

## Git

Vault + submodule files are owned by uid 10242 (not root), which trips git's dubious-ownership check. If `git status`/`git log` here or in the parent vault fail with "detected dubious ownership", add the path via `git config --global --add safe.directory <path>` (already done as of 2026-07-22 for the vault root, `linalg`, and `obsinfra`).
