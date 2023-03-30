/* founders section */

const FOUNDERS_MOCK = [
  {
    image: "./images/founder_jawed.png",
    name: "HM Jawad",
  },
  {
    image: "./images/founder_abid.png",
    name: "Furqan Abid",
  },
  {
    image: "./images/founder_abdullah.png",
    name: "Abdullah Ah",
  },
  {
    image: "./images/founder_akbar.png",
    name: "Akbar Khan",
  },
];

const FOUNDERS = document.getElementById("founders");

let tempHtml = "";
for (let founder of FOUNDERS_MOCK) {
  tempHtml += `<div class="card">
                        <img src='${founder.image}' alt=''/>
                        <h4>${founder.name}</h4>
                </div>`;

  FOUNDERS.innerHTML = tempHtml;
}

/* Testimonial section */

const TESTIMONIALS_MOCK = [
  {
    image: "./images/stacy.png",
    name: "Stacy",
    comment:
      "Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.",
  },
  {
    image: "./images/tiffany.png",
    name: "Tiffany",
    comment:
      "I ordered 5 shirts from them and received them in no time. The customer support was awesome!",
  },
  {
    image: "./images/james.png",
    name: "James",
    comment:
      "I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.",
  },
];

const TESTIMONIALS = document.getElementById("testimonial-container");

tempHtml = "";
for (let testimonial of TESTIMONIALS_MOCK) {
  tempHtml += `<div class="testimonial">
                        <img src='${testimonial.image}' alt=''/>
                        <div>
                            <img src='./images/testimonial_icon.png' alt=''/>
                            <p>${testimonial.comment}</p>
                            <h4>${testimonial.name}</h4>
                        </div>
                </div>`;

  TESTIMONIALS.innerHTML = tempHtml;
}
