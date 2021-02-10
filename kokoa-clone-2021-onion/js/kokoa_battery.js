const batteryContainer = document.querySelector(".kokoa_battery");
const innerBattery = batteryContainer.querySelector(".kokoa_battery_num");
const innerBatteryIcon = batteryContainer.querySelector(".kokoa_battery_icon");
const innerBoltIcon = batteryContainer.querySelector(".kokoa_bolt_icon");

function innerIcon(battery) {
  if (battery >= 90) {
    innerBatteryIcon.innerHTML = '<i class="fas fa-battery-full fa-lg">';
  } else if (battery >= 70) {
    innerBatteryIcon.innerHTML =
      '<i class="fas fa-battery-three-quarters fa-lg">';
  } else if (battery >= 40) {
    innerBatteryIcon.innerHTML = '<i class="fas fa-battery-half fa-lg">';
  } else if (battery >= 10) {
    innerBatteryIcon.innerHTML = '<i class="fas fa-battery-quarter fa-lg">';
  } else {
    innerBatteryIcon.innerHTML = '<i class="fas fa-battery-empty fa-lg">';
  }

  innerBoltIcon.innerHTML = '<i class="fas fa-bolt"></i>';
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
