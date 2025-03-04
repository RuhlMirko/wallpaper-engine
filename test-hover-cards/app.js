const cards = document.querySelectorAll(".card");
const wrapper = document.querySelector(".cards");
const currentRgba = document.querySelector(".picker-container input").value;
const userInput = document.querySelectorAll(".picker-preview input");
let newRgba = currentRgba;

/*
    This event listener follows the mouse cursor and adds the border styling 
*/
wrapper.addEventListener("mousemove", function (event) {
  cards.forEach((card) => {
    // rect only stores the coordinates from the pov of the client
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.background = `radial-gradient(960px circle at ${x}px ${y}px,
    ${newRgba},
    transparent 15%)`;
  });
});

/*
    This block handles the rgba color picker logic
*/
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

userInput.forEach((item) => {
  item.onchange = function () {
    switch (item.id) {
      case "userR":
        values[0] = +item.value;
        break;
      case "userG":
        values[1] = +item.value;
        break;
      case "userB":
        values[2] = +item.value;
        break;
      case "userA":
        values[3] = +item.value / 100;
        break;
    }

    newRgba = `rgba(${values.join(",")})`;
    document.querySelector(".picker-container input").value = newRgba;

    let result = values.slice(0, 3).every((currVal) => currVal > 170)
      ? "#000"
      : "#ddd";

    document.querySelector(".picker-container button").style.color = result;
    document.querySelector(".picker-container button").style.background =
      newRgba;
  };
});
