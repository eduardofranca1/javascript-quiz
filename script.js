// Initial data
let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

// Events
document
  .querySelector(".scoreArea button")
  .addEventListener("click", resetEvent);

// Functions
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];

    // pegar a porcentagem das questões em andamento
    let porcentagem = Math.floor((currentQuestion / questions.length) * 100);
    document.querySelector(".progress--bar").style.width = `${porcentagem}%`;

    document.querySelector(".scoreArea").style.display = "none";
    document.querySelector(".questionArea").style.display = "block";

    document.querySelector(".question").innerHTML = q.question;

    // fazendo o loop para adicionar as opções de respostas na <div>
    // carregar as opções da forma que está abaixo
    // carrega apenas 1 vez o dom e agiliza a renderização
    let optionsHtml = "";
    for (let i in q.options) {
      optionsHtml += `<div data-op=${i} class="option"><span>${
        parseInt(i) + 1
      }</span> ${q.options[i]}</div>`;
    }
    document.querySelector(".options").innerHTML = optionsHtml;

    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClickEvent);
    });
  } else {
    finishQuiz();
  }
}

// função para pegar a opção de resposta que foi clicada
function optionClickEvent(event) {
  // pegando o item clicado
  let clickedOption = parseInt(event.target.getAttribute("data-op"));

  if (questions[currentQuestion].answer === clickedOption) {
    correctAnswers++;
  }

  // adicionar +1 para mudar a pergunta
  // mostra novamente as perguntas
  currentQuestion++;
  showQuestion();
}

// função para atualizar os dados do componente de resultado
function finishQuiz() {
  let points = Math.floor((correctAnswers / questions.length) * 100);

  if (points < 30) {
    document.querySelector(".scoreText1").innerHTML = "Is it bad ein?!";
    document.querySelector(".scorePct").style.color = "#FF0000";
  } else if (points >= 30 && points < 70) {
    document.querySelector(".scoreText1").innerHTML = "Very good!";
    document.querySelector(".scorePct").style.color = "#FFFF00";
  } else if (points >= 70) {
    document.querySelector(".scoreText1").innerHTML = "Congratulations!";
    document.querySelector(".scorePct").style.color = "#0D630D";
  }

  document.querySelector(".scorePct").innerHTML = `You got ${points}%`;
  document.querySelector(
    ".scoreText2"
  ).innerHTML = `You answer ${questions.length} questions and got right ${correctAnswers}.`;

  document.querySelector(".scoreArea").style.display = "block";
  document.querySelector(".questionArea").style.display = "none";
  document.querySelector(".progress--bar").style.width = "100%";
}

// função para resetar os dados
function resetEvent() {
  correctAnswers = 0;
  currentQuestion = 0;
  showQuestion();
}
