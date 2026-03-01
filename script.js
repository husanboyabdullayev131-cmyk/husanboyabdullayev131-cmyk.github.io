// Speaking Questions
const part1Questions = [
    "Do you enjoy reading?",
    "What do you usually do on weekends?",
    "Do you prefer studying alone or with friends?"
];

const part2Topics = [
    "Describe a book you recently read.",
    "Describe a teacher who influenced you.",
    "Describe a goal you want to achieve."
];

function generatePart1() {
    const random = Math.floor(Math.random() * part1Questions.length);
    document.getElementById("part1Question").innerText = part1Questions[random];
}

function generatePart2() {
    const random = Math.floor(Math.random() * part2Topics.length);
    document.getElementById("part2Question").innerText = part2Topics[random];
}

// Timer
let countdown;

function startPrep() {
    startTimer(60);
}

function startSpeaking() {
    startTimer(120);
}

function startTimer(seconds) {
    clearInterval(countdown);
    let time = seconds;

    countdown = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let secs = time % 60;

        document.getElementById("timer").innerText =
            `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        time--;

        if (time < 0) {
            clearInterval(countdown);
            alert("Time is up!");
        }
    }, 1000);
}

// Writing Word Counter
function countWords() {
    const text = document.getElementById("essay").value.trim();
    const words = text === "" ? 0 : text.split(/\s+/).length;
    document.getElementById("wordCount").innerText = words;
}

let timeLeft = 3600; // 60 minutes
let timer;

if (document.getElementById("timer")) {
    timer = setInterval(function () {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        if (seconds < 10) seconds = "0" + seconds;

        document.getElementById("timer").innerText =
            "Time Left: " + minutes + ":" + seconds;

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            alert("Time is up!");
            submitTest();
        }

    }, 1000);
}

function submitTest() {

    let score = 0;

    // Correct answers
    if (document.getElementById("q1").value.toLowerCase() === "innovation") {
        score++;
    }

    if (document.getElementById("q2").value === "True") {
        score++;
    }

    alert("Your score: " + score + "/2");

}