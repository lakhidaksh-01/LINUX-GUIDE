
document.getElementById('toggleButton').addEventListener('click', function() {
    const icon = this.querySelector('.icon');
    icon.classList.toggle('active');

    // Toggle dark theme
    document.body.classList.toggle('dark-theme');
});



// Change theme when body has the 'dark-theme' class
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
            if (document.body.classList.contains('dark-theme')) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
        }
    });
});

observer.observe(document.body, { attributes: true });



// menu toggle button
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});