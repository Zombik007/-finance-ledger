import './sass/main.scss';

window.onscroll = function () {
  changeHeaderBackground();
};

let header = document.querySelector('.header');
// let zaminitel = document.querySelector('.zaminitel');
let headerHeight = header.offsetHeight;

function changeHeaderBackground() {
  if (window.pageYOffset >= headerHeight) {
    header.classList.add('header__box--fixed');
    // zaminitel.classList.add('zaminitel-js');
  } else {
    header.classList.remove('header__box--fixed');
    // zaminitel.classList.remove('zaminitel-js');
  }
}

let form = document.querySelector('.formWithValidation');
// let validateBtn = form.querySelector('.contact__send-button');
let inputFieldEmail = document.querySelector('.js-contact__input-field');
let inputWarning = document.querySelector('.contact__input-warning');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('clicked on validate');
  if (inputFieldEmail.value.length == 0) {
    inputWarning.style.opacity = 1;
    console.log('input empty');

    setTimeout(() => {
      inputWarning.style.opacity = 0;
    }, 5000);
    // document.getElementById('namef').innerHTML = '*данное поле обязательно для заполнения';
    return false;
  }
});

// let inputFieldEmail = document.querySelector('.js-contact__input-field');
// // // let inputFieldLable = document.querySelectorAll('.contact__input-field-name');
// // let email = document.querySelector('[data-email]').value;

// function validate() {
//   //Считаем значения из полей name и email в переменные x и y

//   console.log(inputFieldEmail);
//   //Если поле name пустое выведем сообщение и предотвратим отправку формы
//   if (inputFieldEmail.value.length == 0) {
//     console.log('input empty');
//     // document.getElementById('namef').innerHTML = '*данное поле обязательно для заполнения';
//     return false;
//   }
// }

// validate();

document.querySelectorAll('a[href^="#"').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let header = document.querySelector('.header');
    let headerHeight = header.offsetHeight;

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);
    let topOffset = header.offsetHeight;
    console.log('topOffset: ', topOffset);
    // if (document.documentElement.clientWidth <= 768 && window.pageYOffset >= headerHeight) {
    //   topOffset = 120;
    // }

    if (window.pageYOffset >= headerHeight) {
      topOffset = 0;
    }
    console.log(topOffset);
    // const topOffset = header.offsetHeight;

    // const topOffset = 0; // если не нужен отступ сверху
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
