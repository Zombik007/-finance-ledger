import './sass/main.scss';

window.onscroll = function () {
  changeHeaderBackground();
};

let header = document.querySelector('.header');
let headerHeight = header.offsetHeight;

function changeHeaderBackground() {
  if (window.pageYOffset >= headerHeight) {
    header.classList.add('header__box--fixed');
  } else {
    header.classList.remove('header__box--fixed');
  }
}

let form = document.querySelector('.formWithValidation');
// let validateBtn = form.querySelector('.contact__send-button');
let inputFieldEmail = document.querySelector('.js-contact__input-field');
let inputWarning = document.querySelector('.contact__input-warning');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (inputFieldEmail.value.length === 0) {
    inputWarning.style.opacity = 1;
    console.log('input empty');

    setTimeout(() => {
      inputWarning.style.opacity = 0;
    }, 5000);
    // return false;
  }
  console.log('====================================');
  console.log('press send');
  console.log('====================================');
});

document.querySelectorAll('a[href^="#"').forEach(link => {
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

    console.log('elementPosition: ', elementPosition);
    console.log('offsetPosition: ', offsetPosition);
    console.log('topOffset: ', topOffset);

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});
