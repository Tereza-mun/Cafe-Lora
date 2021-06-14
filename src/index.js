import './style.css';

console.log('funguju!');

const navElm = document.querySelector('nav');
const navBtnElm = document.querySelector('#nav-btn');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

const navClosed = () => {
  navElm.classList.add('nav-closed');
  console.log('navClosed');
};

const navAllElm = navElm.querySelectorAll('a');
console.log(navAllElm);
for (let i = 0; i < navAllElm.length; i += 1) {
  console.log(navAllElm[i]);
  navAllElm[i].addEventListener('click', navClosed);
}
