# Design Variant 5 - Static al-folio

A static version of the al-folio theme that combines:
- ✅ Beautiful al-folio layout and styling
- ✅ Simple HTML/CSS/MD files (no build process)
- ✅ Fast iteration (instant refresh)
- ✅ Markdown content files

## Quick Start

1. **Start the local server:**
   ```bash
   python3 -m http.server 8003
   ```

2. **Open in browser:**
   ```
   http://localhost:8003
   ```

## File Structure

```
design-variant-5/
├── index.html          # Main HTML file
├── style.css          # al-folio compiled CSS
├── markdown-loader.js # Loads markdown files
├── theme.js           # Dark/light mode toggle
├── nav.js             # Navigation smooth scroll
├── content/
│   └── about.md       # About page content
└── images/
    └── profile.jpg    # Profile image
```

## Features

- **No build process** - Edit HTML/CSS, refresh browser
- **Markdown content** - Edit `.md` files, content loads automatically
- **al-folio styling** - Uses the same beautiful CSS
- **Dark/Light mode** - Built-in theme toggle
- **Responsive** - Works on all devices

## Customization

1. Edit `index.html` to change structure
2. Edit `style.css` to customize styling
3. Edit `content/*.md` files to update content
4. Add more sections by adding new markdown files and loading them with `data-markdown` attribute

## Differences from Jekyll version

- No build time (instant changes)
- Simpler file structure
- Manual content management (no automatic BibTeX)
- No server-side processing needed

