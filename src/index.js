import "./style.css";
import { Drink } from "./Drink";

const navElm = document.querySelector("nav");
const navBtnElm = document.querySelector("#nav-btn");

const navClosed = navBtnElm.addEventListener("click", () => {
  navElm.classList.toggle("nav-closed");
});

const navAllElm = navElm.querySelectorAll("a");
for (let i = 0; i < navAllElm.length; i += 1) {
  navAllElm[i].addEventListener("click", navClosed);
}

const orderBtnElm = document.querySelector(".order-btn");
const drinkCupElm = document.querySelector(".drink__cup");
let ordered = false;

orderBtnElm.addEventListener("click", () => {
  if (ordered === false) {
    orderBtnElm.textContent = "Zrušit";
    drinkCupElm.classList.add("drink__cup--selected");
    ordered = true;
  } else if (ordered === true) {
    orderBtnElm.textContent = "Objednat";
    drinkCupElm.classList.remove("drink__cup--selected");
    ordered = false;
  }
});

const drinkListElm = document.querySelector(".drinks-list");

const loadDrinks = fetch("https://apps.kodim.cz/daweb/cafelora/api/drinks")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      drinkListElm.appendChild(Drink(json[i]));
    }
  });
