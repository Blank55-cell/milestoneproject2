// --- Minigame ---
let time = 5;
let clicks = 0;
let timer;

const startButton = document.querySelector("#start-btn");
const clickButton = document.querySelector("#click-btn");
const timeDisplay = document.querySelector("#time-left");
const clickCountDisplay = document.querySelector("#click-count");

// ✔ Fixed: added null checks so this only runs on the game page
if (startButton && clickButton) {

    // ✔ Fixed: click button was active before game started — now disabled by default
    clickButton.disabled = true;

    startButton.addEventListener("click", () => {
        // ✔ Fixed: click button now activates only after start
        clickButton.disabled = false;

        // ✔ Fixed: reset values properly before each round
        clicks = 0;
        time = 5;

        // ✔ Fixed: wrong variable names (was using clickCount and timeLeft instead of correct ones)
        clickCountDisplay.textContent = clicks;
        timeDisplay.textContent = time;

        // ✔ Fixed: timer now stops cleanly at 0
        timer = setInterval(() => {
            time--;
            timeDisplay.textContent = time;

            if (time <= 0) {
                clearInterval(timer);
                clickButton.disabled = true;

                // Fixed: display final score properly 
                const resultDisplay = document.querySelector("#game-results");
                if (resultDisplay) {
                    resultDisplay.textContent = `Final score: ${clicks} clicks`; 
                }
            }
        }, 1000);
    });

    // ✔ Fixed: click button now increments score properly
    clickButton.addEventListener("click", () => {
        clicks++;
        clickCountDisplay.textContent = clicks;
    });
}






