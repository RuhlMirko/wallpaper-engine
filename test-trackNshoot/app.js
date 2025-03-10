let maurice = document.querySelector(".maurice");
let projectile = document.querySelector(".projectile");
//projectile.style.transform = `rotate(${angle - 90}deg)`;
let boxBoundingRect = maurice.getBoundingClientRect();
const logCons = document.getElementById("log");

let boxCenter = {
  x: boxBoundingRect.left + boxBoundingRect.width / 2,
  y: boxBoundingRect.top + boxBoundingRect.height / 2,
};

var bullet = {
  x: boxCenter.x,
  y: boxCenter.y,
  dx: 0.0,
  dy: 0.0,
  radius: 5.0,

  tick: function () {
    this.x += this.dx;
    this.y += this.dy;

    if (
      this.x + this.radius < 0.0 ||
      this.x - this.radius > canvasWidth ||
      this.y + this.radius < 0.0 ||
      this.y - this.radius > canvasHeight
    ) {
      this.dx = 0.0;
      this.dy = 0.0;
    }
  },
};

/*
window.onload = function () {
  loop();
};*/

window.onmousemove = function (e) {
  let angle =
    Math.atan2(e.pageX - boxCenter.x, -(e.pageY - boxCenter.y)) *
    (180 / Math.PI);
  maurice.style.transform = `rotate(${angle}deg)`;
};

document.addEventListener("mousedown", newTick);

function newTick(e) {
  logCons.innerHTML = `${e.pageY}, ${e.pageX} `;
  projectile.classList.remove("hidden");
  projectile.style.top = `${e.pageY - 30}px`;
  projectile.style.left = `${e.pageX - 250}px`;

  let angle =
    Math.atan2(e.pageX - boxCenter.x, -(e.pageY - boxCenter.y)) *
    (180 / Math.PI);
  projectile.style.transform = `rotate(${angle - 90}deg)`;

  setTimeout(newTick(), 200);
}

/* Quality of life features
setTimeout(() => {
    trail.remove();
  }, animationTime);

  TODO: make maurice reset its tracking after window resize
*/
