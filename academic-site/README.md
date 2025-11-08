# Academic Portfolio Site

A simple, clean academic portfolio website with a two-column layout:
- **Left sidebar**: Black background with your name, photo, location, social links, and CV button
- **Right content**: Scrollable sections for About, Research Interest, Teaching, and Publications

## Setup

1. Open `index.html` in your browser, or
2. Use a simple local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or Python 2
   python -m SimpleHTTPServer 8000
   
   # Or Node.js (if you have http-server installed)
   npx http-server
   ```

Then visit `http://localhost:8000`

## Customization

1. **Edit `index.html`**:
   - Update your name, title, description
   - Add your profile photo to `images/profile.jpg`
   - Update social media links
   - Add your CV/resume as `resume.pdf`
   - Customize the content in each section

2. **Edit `style.css`**:
   - Adjust colors, fonts, spacing as needed
   - Modify sidebar width (currently 300px)
   - Change content max-width (currently 900px)

## Files

- `index.html` - Main HTML file
- `style.css` - All styling
- `images/` - Place your profile photo here
- `resume.pdf` - Your CV/resume

No build process, no dependencies, just simple HTML/CSS!

