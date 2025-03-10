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

window.onload = function () {
  loop();
};

window.onmousemove = function (e) {
  let angle =
    Math.atan2(e.pageX - boxCenter.x, -(e.pageY - boxCenter.y)) *
    (180 / Math.PI);
  maurice.style.transform = `rotate(${angle}deg)`;

  projectile.style.transform = `rotate(${angle - 90}deg)`;
  // Saves target coordinates (Dont know why it put minus 300 and minus 30)
  //let targetCoords = [`${e.pageX - 300}px`, `${e.pageY - 30}px`];
};

window.onmousedown = function (e) {
  logCons.innerHTML = `${e.pageY}, ${e.pageX} `;
};

// TODO: make maurice reset its tracking after window resize
