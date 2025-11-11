#!/bin/bash
# Backup current root files (if any)
if [ -f "index.html" ]; then
    mkdir -p .backup-root
    cp index.html .backup-root/ 2>/dev/null || true
fi

# Copy design-variant-5 files to root
cp -r academic-site/design-variant-5/* .

# Update paths in index.html to work from root
sed -i '' 's|href="style.css"|href="style.css"|g' index.html
sed -i '' 's|src="theme.js"|src="theme.js"|g' index.html
sed -i '' 's|src="nav.js"|src="nav.js"|g' index.html
sed -i '' 's|src="markdown-loader.js"|src="markdown-loader.js"|g' index.html
sed -i '' 's|href="content/|href="content/|g' index.html

echo "Design variant 5 files copied to root for testing"
echo "Commit and push to test on GitHub Pages"
