const batteryContainer = document.querySelector(".kokoa_battery");
const innerBattery = batteryContainer.querySelector("#kokoa_battery");
const innerBatteryIcon = batteryContainer.querySelector("#kokoa_battery_icon");

function innerIcon(battery) {
  if (battery >= 90) {
    innerBatteryIcon.innerHTML = '<i class="fas fa-battery-full"></i>';
  } else if (battery >= 70) {
    innerBatteryIcon.innerHTML =
      '<i class="fas fa-battery-three-quarters"></i>';
  } else if (battery >= 40) {
    innerBatteryIcon.innerHTML = '<i class="fas fa-battery-half"></i>';
  } else if (battery >= 10) {
    innerBatteryIcon.innerHTML = '<i class="fas fa-battery-quarter"></i>';
  } else {
    innerBatteryIcon.innerHTML = '<i class="fas fa-battery-empty"></i>';
  }
}

function randomBattery() {
  const battery = parseInt(Math.random() * 100);
  innerBattery.innerHTML = battery + "%";
  innerIcon(battery);
}

function init() {
  randomBattery();
}

init();
