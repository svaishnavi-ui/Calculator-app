
let robot = {
    name: "",
    happiness: 100,
    energy: 100,
    hunger: 100
};
const happinessBar = document.getElementById("happinessbar");
const happinessmessage = document.getElementById("happiness-message");
const energyBar = document.getElementById("energybar");
const energyMessage = document.getElementById("energy-message");
const hungerBar = document.getElementById("hungerbar");
const messageElement = document.getElementById("message");
const hungerMessage = document.getElementById("hunger-message");

function updateprogressbars(){
    happinessBar.style.width = robot.happiness + "%";
    energyBar.style.width = robot.energy + "%";
    hungerBar.style.width = robot.hunger + "%";
    if (robot.happiness <= 0) {
        happinessmessage.textContent = "YOUR ROBOT IS VERY SAD! 😢";
    } else if (robot.energy <= 0) {
        energyMessage.textContent = "YOUR ROBOT IS EXHAUSTED! 😴";
    } else if (robot.hunger <= 0) {
        hungerMessage.textContent = "YOUR ROBOT IS STARVING! 🍽️";
    } else {
        messageElement.textContent = "YOUR ROBOT IS HAPPY! 😊";
    }
    savegame();
}
function increaseHappiness() {
    if (robot.happiness < 100) {
        robot.happiness += 10;
        if (robot.happiness > 100){
            robot.happiness = 100;
                
      }    
    updateprogressbars();
    }
}
function increaseEnergy() {
    if (robot.energy < 100) {
        robot.energy += 10;
        if (robot.energy > 100){
            robot.energy = 100;
        }
        updateprogressbars();
    }
}
function increaseHunger() {
    if (robot.hunger < 100) {
        robot.hunger += 10;
        if (robot.hunger > 100){
            robot.hunger = 100;
        }
        updateprogressbars();
    }
}
function feedrobot() {

      robot.hunger += 20;

      if (robot.hunger > 100) {
        robot.hunger = 100;
      }

      updateprogressbars();
}
setInterval(() => {

      robot.hunger -= 50;
      robot.happiness -= 50;
      robot.energy -= 50;

      // PREVENT NEGATIVE
      if (robot.hunger < 0) robot.hunger = 0;
      if (robot.happiness < 0) robot.happiness = 0;
      if (robot.energy < 0) robot.energy = 0;

      updateprogressbars();

}, 3000);
function saveGame() {
      localStorage.setItem("robotData", JSON.stringify(robot));
}
function loadGame() {

      const saved = localStorage.getItem("robotData");

      if (saved) {
        robot = JSON.parse(saved);
      }

      updateprogressbars();
}

window.onload = function(){
      loadGame();
}