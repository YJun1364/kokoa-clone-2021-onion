const clockContainer = document.querySelector(".kokoa_clock");
const innerTime = clockContainer.querySelector(".clock");

function inputTime(hours, minutes) {
  innerTime.innerHTML = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
  console.log(`${hours} : ${minutes}`);
  console.log("inputTime");
}

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  inputTime(hours, minutes);
  console.log("getTime");
}

function init() {
  getTime();
  setInterval(getTime, 60000);
  console.log("init");
}

init();
