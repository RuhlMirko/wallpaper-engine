let box = document.querySelector(".box");
let boxBoundingRect = box.getBoundingClientRect();

let boxCenter = {
  x: boxBoundingRect.left + boxBoundingRect.width / 2,
  y: boxBoundingRect.top + boxBoundingRect.height / 2,
};
document.addEventListener("mousemove", (e) => {
  let angle =
    Math.atan2(e.pageX - boxCenter.x, -(e.pageY - boxCenter.y)) *
    (180 / Math.PI);

  //let angle = Math.atan2(e.pageX, -e.pageY * (180 / Math.PI));
  box.style.transform = `rotate(${angle}deg)`;
  console.log(Math.floor(angle));
});

// TODO: make maurice reset its tracking after window resize
