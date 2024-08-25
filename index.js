// const toggleButton = document.getElementById('nav-toggle');
// const menuLinks = document.getElementById('navbar-link');

// toggleButton.addEventListener('click', () => {
//     navbarlinks.classList.toggle('active');
// }
// );

const toggleButton = document.getElementById('nav-toggle');
const menuLinks = document.getElementById('navbar-link');

toggleButton.addEventListener('click', () => {
    console.log("Toggle button clicked");
    menuLinks.classList.toggle('active');
});