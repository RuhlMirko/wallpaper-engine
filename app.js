const element = document.getElementById("test");

element.addEventListener("mouseover", function () {
  element.style.backgroundColor = "lightblue"; // Change background on hover
});

element.addEventListener("mouseout", function () {
  element.style.backgroundColor = ""; // Reset background when not hovering
});

document.addEventListener("mousemove", (event) => {
  const trail = document.createElement("div");
  trail.classList.add("trail");
  document.body.appendChild(trail);

  trail.style.left = `${event.pageX}px`;
  trail.style.top = `${event.pageY}px`;

  setTimeout(() => {
    trail.remove();
  }, 2500); // Removes the element after animation
});
