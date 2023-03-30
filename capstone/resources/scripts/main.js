import "../styles/base.scss";
import "../styles/page.scss";
import "../styles/site-banner.scss";
import "../styles/section-header.scss";
import "../styles/card.scss";
import "../styles/benefits.scss";
import "../styles/cta.scss";
import "../styles/button.scss";
import "../styles/footer.scss";
import {
  NEW_ARRIVALS_MOCK,
  SHOPPING_BENEFITS_MOCK,
  TOP_SELLERS_MOCK,
} from "../scripts/mock-data.js";

const NEW_ARRIVALS_SECTION = document.getElementById("new-arrivals");
const BENEFITS_SECTION = document.getElementById("shopping-benefits");
const TOP_SELLERS_SECTION = document.getElementById("top-sellers");

let tempHtml = "";
for (let card of NEW_ARRIVALS_MOCK) {
  tempHtml += `<div class="card">
                        <img src='${card.imgPath}' alt=''/>
                        <h4>${card.title}</h4>
                        <p>${card.cost}</p>
                </div>`;

  NEW_ARRIVALS_SECTION.innerHTML = tempHtml;
}

tempHtml = "";
for (let feature of SHOPPING_BENEFITS_MOCK) {
  tempHtml += `<div class="benefits">
                          <img src='${feature.img}' alt=''/>
                          <div>
                          <h4>${feature.title}</h4>
                          <p>${feature.desc}</p></div>
                  </div>`;

  BENEFITS_SECTION.innerHTML = tempHtml;
}

tempHtml = "";
for (let card of TOP_SELLERS_MOCK) {
  tempHtml += `<div class="card">
                <img src='${card.imgPath}' alt=''/>
                <h4>${card.title}</h4>
                <p>${card.cost}</p>
            </div>`;

  TOP_SELLERS_SECTION.innerHTML = tempHtml;
}
