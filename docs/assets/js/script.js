/*global document, setInterval, clearInterval */

// --- Minigame ---
let time = 5;
let clicks = 0;
let timer;

const startButton = document.querySelector("#start-btn");
const clickButton = document.querySelector("#click-btn");
const timeDisplay = document.querySelector("#time-left");
const clickCountDisplay = document.querySelector("#click-count");

// ✓ Fixed: click button was active before game started.
//   Now disabled by default.
if (startButton && clickButton) {
    clickButton.disabled = true;
    startButton.addEventListener("click", startGame);
    clickButton.addEventListener("click", registerClick);
}

function startGame() {
    clickButton.disabled = false;
    clicks = 0;
    time = 5;

    // ✓ Fixed: wrong variable names.
    //   (Was using clickCount and timeLeft instead of the correct ones.)
    clickCountDisplay.textContent = clicks;
    timeDisplay.textContent = time;

    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    time -= 1;
    timeDisplay.textContent = time;

    if (time <= 0) {
        endGame();
    }
}

function registerClick() {
    clicks += 1;
    clickCountDisplay.textContent = clicks;
}

function endGame() {
    clearInterval(timer);
    clickButton.disabled = true;

    const resultDisplay = document.querySelector("#game-results");
    if (resultDisplay) {
        resultDisplay.textContent = "Final score: " + clicks + " clicks";
    }
}



// --- Healing calculator ---
const unitsInput = document.querySelector("#unitsInput");
const hoursInput = document.querySelector("#hoursInput");
const healButton = document.querySelector("#healButton");
const healOutput = document.querySelector("#healOutput");

if (unitsInput && hoursInput && healButton && healOutput) {
    healButton.addEventListener("click", handleHealing);
}

function getHealingInputs() {
    return {
        hours: Number(hoursInput.value),
        hp: Number(unitsInput.value)
    };
}

function calculateHealing(hp, hours) {
    const days = hours / 24;
    const rate = 0.15;
    const missing = 100 - hp;

    // Real healing formula (✓ fixed extra parenthesis)
    const healed = missing * (1 - Math.pow(1 - rate, days));
    return Math.min(100, hp + healed);
}

function displayHealingResult(value) {
    healOutput.textContent =
    "Estimated HP after healing: " + value.toFixed(1) + "%";
}

function handleHealing() {
    const data = getHealingInputs();
    const hp = data.hp;
    const hours = data.hours;

    if (Number.isNaN(hp) || Number.isNaN(hours) || hp <= 0 || hours < 0) {
        healOutput.textContent = "Please enter a valid number.";
        return;
    }

    const result = calculateHealing(hp, hours);
    displayHealingResult(result);
}



// --- Random Tip Generator ---
const tips = [
    "Always scout before committing your army.",
    "Keep morale high to avoid surprise weaknesses.",
    "Use artillery to soften targets before attacking.",
    "Avoid stacking too many units in one place.",
    "Secure your economy before expanding aggressively."
];

function getRandomTip() {
    const index = Math.floor(Math.random() * tips.length);
    return tips[index];
}

function displayTip(text) {
    const output = document.querySelector("#tipOutput");
    if (output) {
        output.textContent = text;
    }
}

function handleTipClick() {
    const tip = getRandomTip();
    displayTip(tip);
}

const tipButton = document.querySelector("#tipButton");
if (tipButton) {
    tipButton.addEventListener("click", handleTipClick);
}

