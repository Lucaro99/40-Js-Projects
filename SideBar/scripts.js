document.getElementById("nav-toggle").addEventListener('click', () => {
    document.getElementById('nav-center').classList.toggle('show-sidebar');
});

document.getElementById("nav-close").addEventListener('click', () => {
    document.getElementById('nav-center').classList = 'nav-center';
});