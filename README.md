# Portfolio (clean multi-file)

This is a refactor of the single-file `index.html` into a clean multi-file structure.

## Structure
- `index.html` — HTML only; links a single stylesheet.
- `css/styles.css` — All styles (variables, layout, responsive).
- You can add an `assets/` folder for images if desired.

## Develop
Just open `index.html` in your browser, or use a simple static server:

```bash
# Python 3
python -m http.server 5173
# or
npx serve .
```

## Customize
- Change widths in `:root`:
  - `--sidebar-w` (left column width)
  - `--content-max` (right column max width)
- Typography: set font in `<head>` and `body{ font: ... }`.
- Project sections: duplicate the `<section class="project">` block.
