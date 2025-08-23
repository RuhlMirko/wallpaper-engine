"use strict";

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const stages = {
  dawn: "linear-gradient(to top, rgba(240, 155, 65, 1) 0%, rgba(59, 162, 196, 1) 46%, rgba(55, 133, 189, 1) 76%)",
  afternoon:
    "linear-gradient(0deg,rgba(110, 180, 204, 1) 46%, rgba(78, 167, 230, 1) 76%)",
  sunset:
    "linear-gradient(0deg,rgba(170, 87, 102, 0.94) 3%, rgba(245, 192, 118, 1) 33%, rgba(247, 85, 85, 1) 100%)",
  night:
    "linear-gradient(0deg,rgba(10, 12, 17, 1) 0%, rgba(26, 26, 43, 1) 100%)",
};

const hourEl = document.getElementById("currHour");
const dayEl = document.getElementById("currDay");
const background = document.getElementById("bg");
let dayProgress = 0.0;

setInterval(() => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const date = now.getDate();
  const day = now.getDay();
  const month = now.getMonth();
  const year = now.getFullYear();

  const fullHour = `[ ${hours}, ${minutes}, ${seconds} ],`;
  hourEl.textContent = fullHour;
  const totalMinutes = 24 * 60; // 1440 minutes in a day
  const currentMinutes = parseInt(hours) * 60 + parseInt(minutes);
  dayProgress = ((currentMinutes / totalMinutes) * 100).toFixed(2);
  console.log(dayProgress);

  const fullDate = `[ ${month}, ${date}, ${year}, "${dayNames[day]}" ],`;
  dayEl.textContent = fullDate;
  if (dayProgress > 80 || dayProgress <= 25)
    background.style.background = stages.night;
  else if (dayProgress >= 20 && dayProgress < 50)
    background.style.background = stages.dawn;
  else if (dayProgress >= 50) background.style.background = stages.afternoon;
  else background.style.background = stages.sunset;
}, 1000);
