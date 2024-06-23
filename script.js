const levels = [
    {
        level: "Level 1: Addition",
        question: "What is 5 + 3?",
        answer: 8
    },
    {
        level: "Level 2: Subtraction",
        question: "What is 10 - 4?",
        answer: 6
    },
    {
        level: "Level 3: Multiplication",
        question: "What is 6 * 7?",
        answer: 42
    },
    {
        level: "Level 4: Division",
        question: "What is 20 / 5?",
        answer: 4
    },
    {
        level: "Level 5: Exponents",
        question: "What is 3^2?",
        answer: 9
    }
];

let currentLevelIndex = 0;

function loadLevel() {
    const levelData = levels[currentLevelIndex];
    document.getElementById("level").innerText = levelData.level;
    document.getElementById("question").innerText = levelData.question;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const result = document.getElementById("result");
    const levelData = levels[currentLevelIndex];

    if (userAnswer === levelData.answer) {
        result.innerText = "Correct! Well done.";
        document.getElementById("next-button").style.display = "block";
    } else {
        result.innerText = "Incorrect. Try again.";
    }
}

function nextLevel() {
    currentLevelIndex++;
    if (currentLevelIndex >= levels.length) {
        alert("Congratulations! You've completed all the levels.");
        currentLevelIndex = 0;
    }
    loadLevel();
}

window.onload = loadLevel;
