const questions = [
    {
        question: "10 + 5 ?",
        options: ["1", "10", "15", "20"],
        answer: 2
    },
    {
        question: "8 × 4 ?",
        options: ["24", "28", "32", "36"],
        answer: 2
    },
    {
        question: "20 − 7 ?",
        options: ["10", "11", "13", "15"],
        answer: 2
    },
    {
        question: "6 × 6 ?",
        options: ["30", "32", "36", "42"],
        answer: 2
    },
    {
        question: "15 ÷ 3 ?",
        options: ["3", "4", "5", "6"],
        answer: 2
    },
    {
        question: "Which is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        answer: 0
    },
    {
        question: "CSS is used for?",
        options: ["Logic", "Database", "Styling", "Server"],
        answer: 2
    },
    {
        question: "JavaScript runs in?",
        options: ["Browser", "Compiler", "Database", "OS"],
        answer: 0
    },
    {
        question: "2² + 3² = ?",
        options: ["10", "11", "12", "13"],
        answer: 3
    },
    {
        question: "2² + 2² = ?",
        options: ["10", "8", "12", "13"],
        answer: 1
    }
];


let i = 0;
let score = 0;

const qE = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const sE = document.getElementById("score");

function loadQuestion() {
    let q = questions[i];
    qE.textContent = q.question;

    optionButtons.forEach((btn, j) => {
        btn.textContent = q.options[j];
        btn.disabled = false;
    });
}

function check(selected) {
    if (selected === questions[i].answer) {
        score++;
    }

    sE.textContent = "Score: " + score;

    optionButtons.forEach(btn => btn.disabled = true);
}

function nextquestion() {
    i++;

    if (i <questions.length) {
        loadQuestion();
    } else {
        qE.textContent = "Quiz Completed 🎉";
        document.getElementById("button").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
    }
}

loadQuestion();

