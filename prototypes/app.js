const element = document.getElementById("test");

element.addEventListener("mouseover", function () {
  element.style.backgroundColor = "lightblue"; // Change background on hover
});

element.addEventListener("mouseout", function () {
  element.style.backgroundColor = ""; // Reset background when not hovering
});

document.addEventListener("mousemove", (event) => {
  const animationTime = 2500;
  const trail = document.createElement("div");
  trail.classList.add("trail");
  document.body.appendChild(trail);

  // Tracks the cursor coordinates
  trail.style.left = `${event.pageX}px`;
  trail.style.top = `${event.pageY}px`;

  setTimeout(() => {
    trail.remove();
  }, animationTime); // Removes the element after animation ends
});
