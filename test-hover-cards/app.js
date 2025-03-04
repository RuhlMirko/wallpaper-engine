const cards = document.querySelectorAll(".card");
const wrapper = document.querySelector(".cards");
const currentRgba = document.querySelector(".picker-container input").value;
const userInput = document.querySelectorAll(".picker-preview input");

wrapper.addEventListener("mousemove", function (event) {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.background = `radial-gradient(960px circle at ${x}px ${y}px,
    rgba(133, 59, 251),
    transparent 15%)`;
  });
});

const values = currentRgba
  .match(/\(([^)]+)\)/)[1]
  .split(",")
  .map(Number);

values.forEach((val, index) => {
  if (index == 3) {
    userInput[index].value = val * 100;
  } else {
    userInput[index].value = val;
  }
});
