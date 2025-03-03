document.addEventListener("click", (event) => {
  createFirework(event.pageX, event.pageY);
});

function createFirework(x, y) {
  const particles = 30; // Number of explosion particles
  for (let i = 0; i < particles; i++) {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    document.body.appendChild(firework);

    const angle = Math.PI * 2 * (i / particles); // Spread particles in a circular explosion
    const distance = Math.random() * 100 + 10; // Random explosion size
    const xMove = Math.cos(angle) * distance;
    const yMove = Math.sin(angle) * distance;

    firework.style.setProperty("--x", `${xMove}px`);
    firework.style.setProperty("--y", `${yMove}px`);
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    firework.style.backgroundColor = getRandomColor();

    setTimeout(() => firework.remove(), 1500); // Remove after animation
  }
}

function getRandomColor() {
  const colors = ["#5ed4ff", "#cf5eff", "white"];
  return colors[Math.floor(Math.random() * colors.length)];
}
