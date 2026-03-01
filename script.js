const speakingQuestions = [
    "Describe your hometown.",
    "Do you prefer studying alone or with friends?",
    "What kind of books do you enjoy reading?",
    "How do people in your country celebrate special occasions?"
];

const writingTasks = [
    "Some people believe that technology makes life easier. Discuss both views and give your opinion.",
    "The chart shows changes in population between 2000 and 2020. Summarize the information.",
    "Many students work while studying. What are the advantages and disadvantages?"
];

function showSection(section) {
    document.getElementById("speaking").style.display = "none";
    document.getElementById("writing").style.display = "none";
    document.getElementById(section).style.display = "block";
}

function generateSpeaking() {
    const random = Math.floor(Math.random() * speakingQuestions.length);
    document.getElementById("speakingQuestion").innerText = speakingQuestions[random];
}

function generateWriting() {
    const random = Math.floor(Math.random() * writingTasks.length);
    document.getElementById("writingQuestion").innerText = writingTasks[random];
}