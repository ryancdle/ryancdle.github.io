# Design Variants

This directory contains separate design variants for testing different website layouts and styles.

## Structure

- **design-variant-1/**: Current design (saved as variant 1)
- **design-variant-2/**: Testing variant (copy of current design for experimentation)

Each variant is completely self-contained with its own:
- `index.html`
- `style.css`
- `nav.js`
- `markdown-loader.js`
- `images/` folder
- `content/` folder

## How to Test

### Option 1: Local Server (Recommended)

Open a terminal in each variant directory and run:

```bash
# Terminal 1 - Design Variant 1
cd design-variant-1
python3 -m http.server 8000

# Terminal 2 - Design Variant 2
cd design-variant-2
python3 -m http.server 8001
```

Then open in browser:
- Variant 1: http://localhost:8000
- Variant 2: http://localhost:8001

### Option 2: Direct File Opening

Simply open `index.html` in each variant folder in your browser. Note: Markdown loading may not work without a local server.

## Making Changes

- **Design Variant 1**: This is your saved reference design. Keep it unchanged or only make minor adjustments.
- **Design Variant 2**: This is your testing playground. Make any changes you want here without affecting variant 1.

## Notes

- Each variant is completely isolated - changes in one won't affect the other
- Both variants share the same content (markdown files) and images, but they're separate copies
- To update content in both variants, edit the markdown files in each variant's `content/` folder separately
- To create more variants, simply copy one of the existing variant folders

