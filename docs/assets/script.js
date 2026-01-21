// Run code after the page loads

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded");

    // Minigame 
    let time = 5;
    let clicks = 0;
    let timer

    const startButton = document.querySelector("#start-btn");
    const clickButton = document.querySelector("#click-btn");
    const timeDisplay = document.querySelector("#time-left");
    const clickCountDisplay = document.querySelector("#click-count");

    // Added in wrong selectors i noticed just before i added in the rest of the selectors 
    // 

    if (startButton && clickButton) {
        startButton.addEventListener("click", () => {

            // Click button now functions properly due to the correct selectors being chosen
            clickButton.disabled = false;

            clicks = 0;
            time = 5;
            clickCount.textContent = clicks;
            timeLeft.textContent = time;

            timer = setInterval(() => {
                time--;
                timeLeft.textContent = time;

                // ✔ Timer stops at 0
                if (time <= 0) {
                    clearInterval(timer);
                    clickButton.disabled = true;
                }
            }, 1000);
        });

    
    }
    // Missing bracket added
    
    // initTestButton();
});


// Test button example
function initTestButton() {
    const testButton = document.querySelector(".test-button");
    if (!testButton) return;

    testButton.addEventListener("click", () => {
        alert("JavaScript is working");
    });
}


// Basic healing calculator
// Forgot to add in quotes for the selectors
const unitsInput = document.querySelector("#unitsInput");
const hoursInput = document.querySelector("#hoursInput");
const healButton = document.querySelector("#healButton");
const healOutput = document.querySelector("#healOutput");

if (unitsInput && hoursInput && healButton && healOutput) {
    healButton.addEventListener("click", () => {
        const units = Number(unitsInput.value);
        const hours = Number(hoursInput.balue);

        if (isNaN(units) || isNaN(hours) || units < 0 || hours < 0 ) {
            healOutput.textContent = "Please enter the correct values.";
            return;
        }

        const healed = healingCalculator(units, hours);
        healOutput.textContent = `Estimated healed units: ${Math.round(healed)}`;
     });

   

};



function healingCalculator(units, hours) {
    const healingRate = 0.05; // temporary value
    return units * (healingRate * hours);
}

// Basic stack power calculator
function calculateStackPower(infantry, cavalry, artillery) {
    return (infantry * 1) + (cavalry * 3) + (artillery * 5);
}

// Shortcut for querySelector
function $(selector) {
    return document.querySelector(selector);
}







// Might tweak this once the in game numbers are tested 
