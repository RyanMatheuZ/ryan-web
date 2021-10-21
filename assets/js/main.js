// Nav active - MOBILE
document.querySelector('#btn-menu').addEventListener('click', () => {
    document.querySelector('#nav-menu').classList.toggle('nav-active');
});

// Scroll to top
document.querySelector('#anchor-top').addEventListener('click', () => window.scrollTo(0, 0));