// script.js - Hanya untuk smooth scroll

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll untuk navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Update tahun di footer
    document.querySelector('.copyright p').innerHTML = 
        document.querySelector('.copyright p').innerHTML.replace('2023', new Date().getFullYear());
});