const quotes = [
  "The hardest thing in the world to understand is the income tax",
  "I never think of the future. It comes soon enough.",
  "Science without religion is lame. Religion without science is blind.",
  "Great spirits have often encountered violent opposition from weak minds.",
  "Everything should be made as simple as possible, but not simpler.",
];

const shakeBtn = document.querySelector(".shake-btn");
const advice = document.querySelector(".actual_advice");

shakeBtn.addEventListener("click", () => {
  const quote = Math.floor(Math.random() * quotes.length);
  advice.innerHTML = quotes[quote];
});
