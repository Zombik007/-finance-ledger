import './sass/main.scss';

window.onscroll = function () {
  changeHeaderBackground();
};

const header = document.querySelector('.header');
const form = document.querySelector('.formWithValidation');
const inputFieldEmail = document.querySelector('.js-contact__input-field');
const inputWarning = document.querySelector('.contact__input-warning');
const links = document.querySelectorAll('a[href^="#"');

let headerHeight = header.offsetHeight;

function changeHeaderBackground() {
  if (window.pageYOffset >= headerHeight) {
    header.classList.add('header__box--fixed');
  } else {
    header.classList.remove('header__box--fixed');
  }
}

form.addEventListener('submit', hadlerSubmit);

function hadlerSubmit(e) {
  if (inputFieldEmail.value.length === 0) {
    e.preventDefault();
    validate();
    return;
  }
  sendForm();
}

function validate() {
  inputWarning.style.opacity = 1;

  setTimeout(() => {
    inputWarning.style.opacity = 0;
  }, 5000);
}

function sendForm(e) {
  let myForm = document.getElementById('formSend');
  let formData = new FormData(myForm);
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log('Form successfully submitted'))
    .catch(error => alert(error));
}

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let header = document.querySelector('.header');
    let headerHeight = header.offsetHeight;

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);
    let topOffset = header.offsetHeight;

    if (window.pageYOffset >= headerHeight) {
      topOffset = 0;
    }
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});
