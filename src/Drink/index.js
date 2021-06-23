import "./style.css";
import { Layer } from "../Layer/index";

export const Drink = (props) => {
  const drinkElm = document.createElement("div");
  drinkElm.classList.add("drink");
  drinkElm.innerHTML = `
            <div class="drink__product">
              <div class="drink__cup">
                <img src="../assets/cups/${props.id}.png" />
              </div>
              <div class="drink__info">
                <h3>${props.name}</h3>
              </div>
            </div>
            <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>  
  `;

  const layersElm = drinkElm.querySelector(".drink__info");

  for (let i = 0; i < props.layers.length; i++) {
    layersElm.innerHTML += Layer(props.layers[i]);
  }

  const orderBtnElm = drinkElm.querySelector(".order-btn");
  const drinkCupElm = drinkElm.querySelector(".drink__cup");

  orderBtnElm.addEventListener("click", () => {
    if (props.ordered === false) {
      orderBtnElm.textContent = "Zrušit";
      drinkCupElm.classList.add("drink__cup--selected");
      props.ordered = true;
    } else if (props.ordered === true) {
      orderBtnElm.textContent = "Objednat";
      drinkCupElm.classList.remove("drink__cup--selected");
      props.ordered = false;
    }
  });

  return drinkElm;
};
