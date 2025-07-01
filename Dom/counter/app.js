const themeBtn = document.querySelector(".theme");
const body = document.querySelector("body");
const icon = document.querySelector("i");
const countPara = document.querySelector("p");
const addOne = document.querySelector(".addOne");
const inputEl = document.querySelector("input");
const startTimer = document.querySelector(".timer");

themeBtn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    body.classList.add("dark");
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  }
});

let count = 0;
countPara.textContent = count;

addOne.addEventListener("click", () => {
  count++;
  countPara.textContent = count;
});

let timerDuration = null;

inputEl.addEventListener("input", () => {
  timerDuration = inputEl.value;
  countPara.textContent = timerDuration;
});

startTimer.addEventListener("click", () => {
  if (timerDuration) {
    const timerFunc = setInterval(() => {
      if (timerDuration > 0) {
        timerDuration--;
        countPara.textContent = timerDuration
      } else {
        alert("finished");
        clearInterval(timerFunc);
      }
    }, 1000);
  } else return;
});
