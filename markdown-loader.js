// Markdown Loader - Loads markdown files and renders them using marked.js
document.addEventListener('DOMContentLoaded', function() {
    // Configure marked.js options
    if (typeof marked !== 'undefined') {
        marked.setOptions({
            breaks: true,
            gfm: true
        });
    }

    // Find all elements with data-markdown attribute
    const markdownElements = document.querySelectorAll('[data-markdown]');
    
    // Load and render each markdown file
    markdownElements.forEach(function(element) {
        const markdownFile = element.getAttribute('data-markdown');
        
        // Try to load markdown file
        fetch(markdownFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${markdownFile}: ${response.status}`);
                }
                return response.text();
            })
            .then(markdown => {
                renderMarkdown(element, markdown);
            })
            .catch(error => {
                console.error('Error loading markdown:', error);
                // Try to load from embedded fallback content
                const fallbackContent = element.getAttribute('data-fallback');
                if (fallbackContent) {
                    renderMarkdown(element, fallbackContent);
                } else {
                    element.innerHTML = '<p>Error loading content. Please check the markdown file or use a local server.</p>';
                }
            });
    });
    
    function renderMarkdown(element, markdown) {
        if (typeof marked !== 'undefined') {
            // Convert markdown to HTML
            const html = marked.parse(markdown);
            element.innerHTML = html;
            
            // Apply special styling for news table
            if (element.closest('#news') || element.closest('#recent-news')) {
                const tables = element.querySelectorAll('table');
                tables.forEach(table => {
                    table.classList.add('news-table');
                    // Hide header row if it exists
                    const thead = table.querySelector('thead');
                    if (thead) {
                        thead.style.display = 'none';
                    }
                    // Add classes to table cells in tbody
                    const tbody = table.querySelector('tbody');
                    if (tbody) {
                        const rows = tbody.querySelectorAll('tr');
                        rows.forEach((row) => {
                            const cells = row.querySelectorAll('td');
                            if (cells.length >= 2) {
                                cells[0].classList.add('news-date');
                                cells[1].classList.add('news-item');
                            }
                        });
                    } else {
                        // If no tbody, process all rows (skip header row if it's a th)
                        const rows = table.querySelectorAll('tr');
                        rows.forEach((row) => {
                            const firstCell = row.querySelector('th');
                            if (firstCell) {
                                // This is a header row, hide it
                                row.style.display = 'none';
                            } else {
                                const cells = row.querySelectorAll('td');
                                if (cells.length >= 2) {
                                    cells[0].classList.add('news-date');
                                    cells[1].classList.add('news-item');
                                }
                            }
                        });
                    }
                });
            }
            
            // Apply styling for publications list
            if (element.closest('#publications')) {
                const lists = element.querySelectorAll('ol');
                lists.forEach(list => {
                    list.classList.add('publications');
                });
            }
            
            // Portfolio items: HTML in markdown is preserved by marked.js
            // No special processing needed as HTML is already in the markdown file
        } else {
            console.error('marked.js is not loaded');
            element.innerHTML = '<p>Error: Markdown parser not available</p>';
        }
    }
});

