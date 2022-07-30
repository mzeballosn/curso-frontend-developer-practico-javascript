const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click',toggleDeskTopMenu);

function toggleDeskTopMenu(){
    desktopMenu.classList.toggle('inactive');
}