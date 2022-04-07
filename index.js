const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secondsEl = document.getElementById("seconds");

const newYears = "30 Dec 2022";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const toralSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(toralSeconds / 3600 / 24);
  const hours = Math.floor(toralSeconds / 3600) % 24;
  const minutes = Math.floor(toralSeconds / 60) % 60;
  const seconds = Math.floor(toralSeconds % 60);

  /* console.log(days, hours, minutes, seconds); */

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
