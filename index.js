const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const startbtn = document.querySelector(".start");
const stoptbtn = document.querySelector(".stop");
const restartbtn = document.querySelector(".restart");
const time = document.querySelector(".time");
let hh = 00;
let mm = 00;
let ss = 00;
let interval;

startbtn.addEventListener("click", () => {
  interval = setInterval(starttimer, 0);
  time.classList.remove("pulse");
});

stoptbtn.addEventListener("click", () => {
  clearInterval(interval);
  time.classList.add("pulse");
});
restartbtn.addEventListener("click", () => {
  clearInterval(interval);
  mm = "00";
  ss = "00";
  hh = "00";
  hour.innerHTML = hh;
  min.innerHTML = mm;
  sec.innerHTML = ss;
  time.classList.remove("pulse");
});
function starttimer() {
  ss++;
  if (ss <= 9) {
    sec.innerHTML = "0" + ss;
  }
  if (ss > 9) {
    sec.innerHTML = ss;
  }
  if (ss > 59) {
    mm++;
    min.innerHTML = "0" + mm;
    ss = 0;
    sec.innerHTML = "0" + 0;
  }
  if (mm > 9) {
    min.innerHTML = mm;
  }
  if (mm > 59) {
    hh++;
    hour.innerHTML = "0" + hh;
    mm = 0;
    min.innerHTML = "0" + 0;
  }
}
