// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // CV button in sidebar
    const cvButton = document.querySelector('.sidebar-cv-button');
    if (cvButton) {
        cvButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const topNavHeight = 60;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - topNavHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Top navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const topNavHeight = 60;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - topNavHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
