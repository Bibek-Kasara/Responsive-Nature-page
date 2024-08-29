const toggleButton = document.getElementById('nav-toggle');
const menuLinks = document.getElementById('navbar-link');

toggleButton.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
}
);