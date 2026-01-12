// Run code after the page loads


// Run code after the page loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded");
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
