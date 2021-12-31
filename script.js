"use strict";

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "No Number";
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style =
            "background: linear-gradient(to right top, rgb(36, 173, 73), rgb(224, 218, 60)) no-repeat;s";
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent =
                guess > secretNumber ? "too high" : "too low";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You lost the game";
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".play-again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "“Start guessing!”";
    document.querySelector("body").style =
        "background: linear-gradient(to top right, #1a2a6c, #b21f1f, #fdbb2d) no-repeat";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
});
