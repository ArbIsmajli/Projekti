const questions = [
    {
      question: "Kush ka më së shumti para në botë?",
      options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Bernard Arnault"],
      correct: 3
    },
    {
      question: "Cila është kryeqyteti i Francës?",
      options: ["Berlin", "Madrid", "Paris", "Roma"],
      correct: 2
    },
    {
      question: "Sa kontinente ka në botë?",
      options: ["5", "6", "7", "8"],
      correct: 2
    },
    {
      question: "Cili është elementi kimik me simbolin H?",
      options: ["Helium", "Hidrogjen", "Hafnium", "Holmium"],
      correct: 1
    },
    {
      question: "Cili planet është më afër Diellit?",
      options: ["Toka", "Venusi", "Marsi", "Merkuri"],
      correct: 3
    },
    {
      question: "Sa është 5 x 6?",
      options: ["11", "30", "25", "36"],
      correct: 1
    },
    {
      question: "Kush ka shkruar 'Hamlet'?",
      options: ["Shakespeare", "Dostojevski", "Goethe", "Dickens"],
      correct: 0
    },
    {
      question: "Cili është oqeani më i madh?",
      options: ["Atlantiku", "Indian", "Arktik", "Paqësori"],
      correct: 3
    },
    {
      question: "Çfarë ngjyre del kur përzien të kuqen me të verdhën?",
      options: ["Portokalli", "Gjelbër", "Rozë", "Kaltër"],
      correct: 0
    },
    {
      question: "Sa javë ka një vit?",
      options: ["52", "50", "48", "54"],
      correct: 0
    }
  ];
  
  const questionText = document.getElementById('questionText');
  const optionsContainer = document.getElementById('optionsContainer');
  const feedback = document.getElementById('feedback');
  const nextBtn = document.getElementById('nextBtn');
  const backBtn = document.getElementById('backToMemoryBtn');
  
  let currentQuestion = 0;
  
  function loadQuestion(index) {
    const q = questions[index];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    nextBtn.style.display = "none";
  
    q.options.forEach((option, i) => {
      const btn = document.createElement("button");
      btn.classList.add("option");
      btn.textContent = option;
      btn.addEventListener("click", () => checkAnswer(i, q.correct));
      optionsContainer.appendChild(btn);
    });
  }
  
  function checkAnswer(selected, correct) {
    const allBtns = document.querySelectorAll(".option");
    allBtns.forEach(btn => btn.disabled = true);
  
    if (selected === correct) {
      feedback.textContent = "✅ Saktë!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = `❌ Gabim!`;
      feedback.style.color = "red";
    }
  
    if (currentQuestion < questions.length - 1) {
      nextBtn.style.display = "inline-block";
    } else {
      backBtn.style.display = "inline-block";
      feedback.textContent += " 🎉 Kuizi përfundoi!";
    }
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    loadQuestion(currentQuestion);
  });
  
  backBtn.addEventListener("click", () => {
    window.location.href = "detyra2.html";
  });
  
  // Start
  loadQuestion(currentQuestion);