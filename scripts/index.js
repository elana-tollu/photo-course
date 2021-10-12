const buttonMenu = document.querySelector('.button-menu');
const popupMenu = document.querySelector('.popup');

function init () {
  buttonMenu.addEventListener('click', toggleMenu);  // Прицепить listener
}

function toggleMenu () {
  buttonMenu.classList.toggle('button-menu_close');
  popupMenu.classList.toggle('popup_open');
}



init();
