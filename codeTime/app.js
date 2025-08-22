"use strict";

const hourEl = document.getElementById("currHour");
const dayEl = document.getElementById("currDay");

setInterval(() => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const day = now.getDay();
  const month = now.getMonth();
  const year = now.getFullYear();
  console.log(day, month, year);

  const fullHour = `[${hours}, ${minutes}, ${seconds}]`;
  hourEl.textContent = fullHour;
  const fullDate = `[${month}, ${day}, ${year}]`;
  dayEl.textContent = fullDate;
}, 1000);
