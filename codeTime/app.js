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
const hourEl = document.getElementById("currHour");
const dayEl = document.getElementById("currDay");
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
}, 1000);
