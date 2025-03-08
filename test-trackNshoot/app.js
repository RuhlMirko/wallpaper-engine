let maurice = document.querySelector(".maurice");
let projectile = document.querySelector(".projectile");
//projectile.style.transform = `rotate(${angle - 90}deg)`;
let boxBoundingRect = maurice.getBoundingClientRect();

let boxCenter = {
  x: boxBoundingRect.left + boxBoundingRect.width / 2,
  y: boxBoundingRect.top + boxBoundingRect.height / 2,
};

console.log(boxCenter.x, boxCenter.y);
document.addEventListener("mousemove", (e) => {
  let angle =
    Math.atan2(e.pageX - boxCenter.x, -(e.pageY - boxCenter.y)) *
    (180 / Math.PI);
  maurice.style.transform = `rotate(${angle}deg)`;

  const animationTime = 2500;

  projectile.style.transform = `rotate(${angle - 90}deg)`;
  let targetCoords = [`${e.pageX - 300}px`, `${e.pageY - 30}px`]; // Saves target coordinates

  /*
  setTimeout(() => {
    projectile.remove();
  }, animationTime);*/
});

// TODO: make maurice reset its tracking after window resize
