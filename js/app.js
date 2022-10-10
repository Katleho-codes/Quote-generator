const quotes = [
  "The hardest thing in the world to understand is the income tax",
  "I never think of the future. It comes soon enough.",
  "Science without religion is lame. Religion without science is blind.",
  "Great spirits have often encountered violent opposition from weak minds.",
  "Everything should be made as simple as possible, but not simpler.",
];

const shakeBtn = document.querySelector(".shake-btn");
const advice = document.querySelector(".actual_advice");
const adviceNumber = document.querySelector("#advice_number");

shakeBtn.addEventListener("click", fetchAPI);

async function fetchAPI() {
  let URL = fetch("https://api.adviceslip.com/advice");
  await URL.then((res) => res.json()).then((data) => {
    adviceNumber.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
  });
}

fetchAPI();
