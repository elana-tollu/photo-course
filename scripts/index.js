const buttonMenu = document.querySelector('.button-menu');
const popupMenu = document.querySelector('.popup');
const signUpForm = document.querySelector('.form');

function init () {
  buttonMenu.addEventListener('click', toggleMenu);  // Прицепить listener
  signUpForm.addEventListener('submit', signUp);
}

function toggleMenu () {
  buttonMenu.classList.toggle('button-menu_close');
  popupMenu.classList.toggle('popup_open');
}

function signUp(submitEvent) {
  submitEvent.preventDefault();  // Не отправлять форму на сервер и не перезагружать страницу
  const email = signUpForm.elements['email'].value;
  signUpForm.reset();
  alert(`Уважаемый ${email}, Ваша заявка принята!`);
}

init();
