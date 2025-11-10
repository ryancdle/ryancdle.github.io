// Smooth scroll for CV button in sidebar
document.addEventListener('DOMContentLoaded', function() {
    const cvButton = document.querySelector('.sidebar-cv-button');
    
    if (cvButton) {
        cvButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const sidebarHeight = 0;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - sidebarHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});
