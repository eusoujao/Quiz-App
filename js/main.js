const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

// Importar as perguntas do segundo arquivo
const questions = [
  {
    question: "O que as árvores produzem através da fotossíntese?",
    answers: [
      { option: "Galhos", correct: false },
      { option: "Oxigênio", correct: true },
      { option: "Folhas", correct: false },
      { option: "Raizes", correct: false },
    ],
  },
  {
    question: "Onde vivem os peixes?",
    answers: [
      { option: "Nas árvores", correct: false },
      { option: "No espaço sideral", correct: false },
      { option: "Na água", correct: true },
      { option: "Nas nuvens", correct: false },
    ],
  },
  {
    question: "O que você deve fazer para economizar água ao escovar os dentes?",
    answers: [
      { option: "Deixar a torneira aberta o tempo todo", correct: false },
      { option: "Usar uma mangueira enquanto escova", correct: false },
      { option: "Escovar os dentes no chuveiro", correct: false },
      { option: "Fechar a torneira enquanto escova os dentes.", correct: true },
    ],
  },
  {
    question: "Qual é a cor da maioria das folhas das árvores?",
    answers: [
      { option: "Verde", correct: true },
      { option: "Vermelho", correct: false },
      { option: "Azul", correct: false },
      { option: "Amarelo", correct: false },
    ],
  },
  {
    question: "O que é uma horta?",
    answers: [
      { option: "Uma biblioteca de vegetais", correct: false },
      { option: "Um lugar onde as pessoas cultivam vegetais e ervas", correct: true },
      { option: "Um peixe exótico", correct: false },
      { option: "Um veículo espacial lunar", correct: false },
    ],
  },
];

// Logica do quizz

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();