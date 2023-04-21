const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateLevelChange();
        updateDischargingTimeInfo();
        updateChargingTimeInfo();
      }
      updateAllBatteryDetails();
      // battery charging change
      battery.addEventListener("chargingchange", () => {
        console.log("charging has changed");
      });
      function updateChargingInfo() {
        const isCharging = battery.charging ? "yes" : "no";
        batteryCharging.innerHTML = isCharging;
      }
      // charging time
      battery.addEventListener("chargingtimechange", () => {
        updateChargingTimeInfo();
      });
      function updateChargingTimeInfo() {
        batteryChargingTime.innerHTML = battery.chargingTime;
      }
      // discharging time
      battery.addEventListener("dischargingtimechange", () => {
        updateDischargingTimeInfo();
      });
      function updateDischargingTimeInfo() {
        batteryDisChargingTime.innerHTML = battery.dischargingTime;
      }
      // battery level change
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });
      function updateLevelChange() {
        batteryLevel.innerHTML = battery.level * 100 + "%";
      }
    });
  }
};

battery();
