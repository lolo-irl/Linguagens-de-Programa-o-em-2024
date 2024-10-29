const questions = [
    { question: "Qual linguagem é usada para estilizar páginas web?", answer: "CSS" },
    { question: "Qual framework é comumente usado com JavaScript no frontend?", answer: "React" },
    { question: "Qual linguagem é conhecida por sua simplicidade e uso em inteligência artificial?", answer: "Python" },
  ];
  
  function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    questions.forEach((q, index) => {
      const questionElement = document.createElement('div');
      questionElement.classList.add('question');
      questionElement.innerHTML = `
        <p>${q.question}</p>
        <input type="text" id="answer${index}" placeholder="Sua resposta">
      `;
      quizContainer.appendChild(questionElement);
    });
  }
  
  function checkAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
      const userAnswer = document.getElementById(`answer${index}`).value;
      if (userAnswer.trim().toLowerCase() === q.answer.toLowerCase()) {
        score++;
      }
    });
    document.getElementById('score').innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
  }
  
  window.onload = loadQuiz;
  