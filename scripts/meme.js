   // ================= DATA =================
   const questions = [
    // Part 1: Grammar (1-5)
    {
      id: 1,
      part: "Grammar",
      type: "mc",
      meme: "https://i.imgflip.com/1ur9b0.jpg",
      memeAlt: "Distracted Boyfriend meme",
      question:
        "He _____ at the new meme while his grammar _____ ignoring him.",
      options: [
        "looks / is",
        "is looking / are",
        "is looking / is",
        "look / are",
      ],
      correct: 2,
    },
    {
      id: 2,
      part: "Grammar",
      type: "mc",
      meme: "https://i.imgflip.com/2am6qn.jpg",
      memeAlt: "Woman Yelling at Cat meme",
      question:
        "If she _____ English better, she _____ so confused right now.",
      options: [
        "knew / wouldn't be",
        "knows / won't be",
        "had known / wouldn't have been",
        "know / aren't",
      ],
      correct: 0,
    },
    {
      id: 3,
      part: "Grammar",
      type: "mc",
      meme: "https://i.imgflip.com/30b1gx.jpg",
      memeAlt: "Drake Hotline Bling meme",
      question: "Drake prefers _____ memes _____ boring textbooks.",
      options: [
        "to watch / than reading",
        "watching / to reading",
        "watch / rather than read",
        "watching / than read",
      ],
      correct: 1,
    },
    {
      id: 4,
      part: "Grammar",
      type: "mc",
      meme: "https://i.imgflip.com/26am.jpg",
      memeAlt: "This is Fine dog meme",
      question:
        "By the time he realized the room was on fire, he _____ already _____ for hours.",
      options: [
        "has / been sitting",
        "had / been sitting",
        "was / sitting",
        "did / sit",
      ],
      correct: 1,
    },
    {
      id: 5,
      part: "Grammar",
      type: "mc",
      meme: "https://i.imgflip.com/1g8my4.jpg",
      memeAlt: "Two Buttons meme",
      question: "He can't decide whether _____ the meme or _____ it.",
      options: [
        "to save / to share",
        "saving / sharing",
        "save / share",
        "to save / share",
      ],
      correct: 0,
    },
    // Part 2: Vocabulary (6-10)
    {
      id: 6,
      part: "Vocabulary",
      type: "mc",
      meme: "https://i.imgflip.com/2k8p.jpg",
      memeAlt: "Stonks meme",
      question: 'What does "stonks" mean in meme culture?',
      options: [
        'Ironic misspelling of "stocks" (shares)',
        "A new type of cryptocurrency",
        "Slang word for memes",
        'Verb meaning "to get rich quickly"',
      ],
      correct: 0,
    },
    {
      id: 7,
      part: "Vocabulary",
      type: "mc",
      meme: null,
      question: 'What does "based" mean in internet slang?',
      options: [
        "Stupid, ridiculous",
        "Confident in your opinion, not fearing judgment",
        "Based on scientific facts",
        "Outdated, old-school",
      ],
      correct: 1,
    },
    {
      id: 8,
      part: "Vocabulary",
      type: "mc",
      meme: null,
      question:
        'What does "It\'s giving..." mean in TikTok memes? (e.g., "It\'s giving main character energy")',
      options: [
        "It literally gives me...",
        "It creates a vibe/impression of...",
        "It offers me...",
        "It presents a gift of...",
      ],
      correct: 1,
    },
    {
      id: 9,
      part: "Vocabulary",
      type: "mc",
      meme: null,
      question: 'Choose a synonym for "vibe" in meme context:',
      options: [
        "atmosphere / feeling",
        "volume / sound",
        "vibration / frequency",
        "picture / image",
      ],
      correct: 0,
    },
    {
      id: 10,
      part: "Vocabulary",
      type: "mc",
      meme: null,
      question: 'What does "no cap" mean?',
      options: [
        "Without a hat",
        "No lie, for real, honestly",
        "No limit, unlimited",
        "Doesn't matter",
      ],
      correct: 1,
    },
    // Part 3: Listening (11-13)
    {
      id: 11,
      part: "Listening",
      type: "mc",
      meme: null,
      question:
        "🎧 Listen: \"Bruh, did you see that new meme? It's so fire, I can't even—\"<br><div class='audio-transcript'>What does the speaker feel?</div>",
      options: ["Annoyance", "Excitement, amazement", "Boredom", "Sadness"],
      correct: 1,
    },
    {
      id: 12,
      part: "Listening",
      type: "mc",
      meme: "https://i.imgflip.com/2qfyx3.jpg",
      memeAlt: "Is this a pigeon meme",
      question:
        '🎧 Audio: Man asks "Is this a butterfly?" about a butterfly.<br>What\'s the humor based on?',
      options: [
        "Bad grammar",
        "Deliberate misunderstanding of something obvious",
        "Complex vocabulary",
        "Wordplay",
      ],
      correct: 1,
    },
    {
      id: 13,
      part: "Listening",
      type: "mc",
      meme: null,
      question:
        '🎧 Audio: "Only in Ohio..." + strange laugh<br>What does "Only in Ohio" usually describe?',
      options: [
        "Something ordinary and boring",
        "Something completely absurd and chaotic",
        "Something romantic",
        "Something educational",
      ],
      correct: 1,
    },
    // Part 4: Writing (14-15) - self-assessed
    {
      id: 14,
      part: "Writing",
      type: "writing",
      meme: "https://i.imgflip.com/2h79y5.jpg",
      memeAlt: "Change My Mind meme",
      question:
        'Write your opinion (1-2 sentences):<br><strong>"Pineapple on pizza is _____ because _____."</strong>',
      placeholder:
        "Example: Pineapple on pizza is delicious because the sweet and salty combination is amazing!",
    },
    {
      id: 15,
      part: "Writing",
      type: "writing",
      meme: "https://i.imgflip.com/1j95xh.jpg",
      memeAlt: "Expanding Brain meme",
      question:
        "Describe learning English in two levels:<br><strong>Small brain:</strong> _____<br><strong>Galaxy brain:</strong> _____",
      placeholder:
        "Example:\nSmall brain: I learn English to pass exams\nGalaxy brain: I learn English to connect with people worldwide and understand memes in their original form",
    },
    // Part 5: Comprehension (16-20)
    {
      id: 16,
      part: "Comprehension",
      type: "mc",
      meme: "https://i.imgflip.com/4/2fm6x.jpg",
      memeAlt: "They don't know meme",
      question:
        'In the meme "They don\'t know I...", which grammatical structure is used?',
      options: [
        "Present Perfect",
        "Past Continuous",
        "Present Simple",
        "Future Perfect",
      ],
      correct: 2,
    },
    {
      id: 17,
      part: "Comprehension",
      type: "mc",
      meme: "https://i.imgflip.com/30el.jpg",
      memeAlt: "Surprised Pikachu meme",
      question: 'When do you use the "Surprised Pikachu" meme?',
      options: [
        "When expecting a surprise",
        "When pretending to be surprised by obvious consequences of your actions",
        "When genuinely happy",
        "When you don't understand a joke",
      ],
      correct: 1,
    },
    {
      id: 18,
      part: "Comprehension",
      type: "mc",
      meme: null,
      question:
        '"It\'s Wednesday, my _____" - What part of speech is missing?',
      options: ["noun", "verb", "adjective", "adverb"],
      correct: 0,
    },
    {
      id: 19,
      part: "Comprehension",
      type: "mc",
      meme: null,
      question:
        'If someone is called "NPC" (Non-Playable Character) online, it means they:',
      options: [
        "Are very creative",
        "Behave in a scripted way, without their own opinion",
        "Are professional gamers",
        "Are great conversationalists",
      ],
      correct: 1,
    },
    {
      id: 20,
      part: "Comprehension",
      type: "mc",
      meme: null,
      question:
        'What literary device is used in "Task failed successfully"?',
      options: ["Metaphor", "Oxymoron", "Hyperbole", "Alliteration"],
      correct: 1,
    },
  ];

  // ================= STATE =================
  let currentQuestion = 0;
  let answers = {};
  let userWritingScores = {}; // For questions 14-15: 0, 1, or 2

  // ================= DOM ELEMENTS =================
  const form = document.getElementById("quiz-form");
  const progress = document.getElementById("progress");
  const currentQEl = document.getElementById("current-q");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const finishBtn = document.getElementById("finish-btn");
  const resultsEl = document.getElementById("results");

  // ================= FUNCTIONS =================
  function renderQuestion(index) {
    const q = questions[index];
    currentQEl.textContent = index + 1;
    progress.style.width = `${((index + 1) / questions.length) * 100}%`;

    // Update buttons
    prevBtn.disabled = index === 0;
    if (index === questions.length - 1) {
      nextBtn.classList.add("hidden");
      finishBtn.classList.remove("hidden");
    } else {
      nextBtn.classList.remove("hidden");
      finishBtn.classList.add("hidden");
    }

    // Create question card
    const card = document.createElement("div");
    card.className = "question-card active";
    card.dataset.id = q.id;

    let content = `<span class="part-title">${q.part}</span>`;

    if (q.meme) {
      content += `<img src="${q.meme}" alt="${q.memeAlt}" class="meme-img" onerror="this.parentElement.removeChild(this)">`;
    }

    content += `<div class="question-text">${q.question}</div>`;

    if (q.type === "mc") {
      content += '<div class="options">';
      q.options.forEach((opt, i) => {
        const isSelected = answers[q.id] === i ? "selected" : "";
        content += `
        <label class="option ${isSelected}" data-value="${i}">
          <span class="option-letter">${String.fromCharCode(65 + i)}</span>
          <span>${opt}</span>
        </label>
      `;
      });
      content += "</div>";
    } else if (q.type === "writing") {
      content += `
      <textarea name="writing-${q.id}" placeholder="${
        q.placeholder || "Write your answer here..."
      }">${answers[q.id] || ""}</textarea>
      <div style="margin-top:10px; font-size:0.9rem; color:#666;">
        <strong>Self-assessment:</strong> How would you rate your answer?
        <div style="display:flex; gap:10px; margin-top:8px;">
          <label style="flex:1; text-align:center; padding:8px; background:#fff; border:2px solid #ddd; border-radius:8px; cursor:pointer;">
            <input type="radio" name="score-${q.id}" value="0" ${
        userWritingScores[q.id] === 0 ? "checked" : ""
      }> 
            <div>😕<br><small>0 pts</small></div>
          </label>
          <label style="flex:1; text-align:center; padding:8px; background:#fff; border:2px solid #ddd; border-radius:8px; cursor:pointer;">
            <input type="radio" name="score-${q.id}" value="1" ${
        userWritingScores[q.id] === 1 ? "checked" : ""
      }> 
            <div>🙂<br><small>1 pt</small></div>
          </label>
          <label style="flex:1; text-align:center; padding:8px; background:#fff; border:2px solid #ddd; border-radius:8px; cursor:pointer;">
            <input type="radio" name="score-${q.id}" value="2" ${
        userWritingScores[q.id] === 2 ? "checked" : ""
      }> 
            <div>🤩<br><small>2 pts</small></div>
          </label>
        </div>
      </div>
    `;
    }

    card.innerHTML = content;
    form.innerHTML = "";
    form.appendChild(card);

    // Add event listeners for MC options
    if (q.type === "mc") {
      card.querySelectorAll(".option").forEach((opt) => {
        opt.addEventListener("click", () => {
          card
            .querySelectorAll(".option")
            .forEach((o) => o.classList.remove("selected"));
          opt.classList.add("selected");
          answers[q.id] = parseInt(opt.dataset.value);
        });
      });
    }

    // Add event listeners for writing self-score
    if (q.type === "writing") {
      const textarea = card.querySelector("textarea");
      textarea.addEventListener("input", (e) => {
        answers[q.id] = e.target.value;
      });
      card.querySelectorAll(`[name="score-${q.id}"]`).forEach((radio) => {
        radio.addEventListener("change", (e) => {
          userWritingScores[q.id] = parseInt(e.target.value);
        });
      });
    }
  }

  function calculateScore() {
    let score = 0;
    const feedback = [];

    // MC questions (1-13, 16-20) = 18 questions, 1 pt each
    questions
      .filter((q) => q.type === "mc")
      .forEach((q) => {
        const isCorrect = answers[q.id] === q.correct;
        if (isCorrect) score++;
        feedback.push({
          q: q.id,
          correct: isCorrect,
          answer:
            q.type === "mc"
              ? q.options[answers[q.id]]
              : answers[q.id] || "(no answer)",
          correctAnswer: q.type === "mc" ? q.options[q.correct] : null,
        });
      });

    // Writing questions (14-15) = up to 2 pts each
    [14, 15].forEach((id) => {
      const pts = userWritingScores[id] || 0;
      score += pts;
      feedback.push({
        q: id,
        correct: pts >= 1,
        answer: answers[id] || "(no answer)",
        correctAnswer: `Self-rated: ${pts}/2`,
      });
    });

    return { score, feedback };
  }

  function getLevel(score) {
    if (score >= 19)
      return {
        level: "C1-C2",
        desc: "🎯 Advanced/Proficient: You understand nuances, slang, irony, and complex structures. You can use English flexibly and effectively!",
      };
    if (score >= 15)
      return {
        level: "B2",
        desc: " Upper-Intermediate: Good level! You understand most memes and context. Keep practicing slang and fast speech.",
      };
    if (score >= 11)
      return {
        level: "B1",
        desc: "👍 Intermediate: Basic understanding. Slang and fast phrases are challenging. Focus on listening and vocabulary.",
      };
    if (score >= 7)
      return {
        level: "A2",
        desc: "📚 Elementary: You understand simple phrases. Memes with wordplay are hard. Build your grammar and vocabulary foundation.",
      };
    return {
      level: "A1",
      desc: "🌱 Beginner: You need to build basic grammar and vocabulary. Start with simple content and gradually add memes!",
    };
  }
  function showResults() {
    const { score, feedback } = calculateScore();
    const level = getLevel(score);
  
    document.getElementById("final-score").textContent = score;
    document.getElementById("level-badge").textContent = level.level;
    document.getElementById("level-desc").textContent = level.desc;
  
    const feedbackList = document.getElementById("feedback-list");
    
    // 🔥 Показываем ТОЛЬКО неправильные ответы
    const wrongAnswers = feedback.filter(f => !f.correct);
  
    if (wrongAnswers.length === 0) {
      feedbackList.innerHTML = `
        <div style="text-align:center; padding:20px; color:var(--success);">
          🎉 Идеально! Ошибок нет!
        </div>`;
    } else {
      // Ограничиваем показ до 10 ошибок + сообщение о скрытых
      const displayed = wrongAnswers.slice(0, 10);
      const hiddenCount = wrongAnswers.length - 10;
      
      feedbackList.innerHTML = `
        ${displayed.map(f => `
          <div class="feedback-item incorrect">
            <div class="q-header">
              <span>Вопрос #${f.q}</span>
              <span>✗</span>
            </div>
            <div class="q-body">
              <div><strong>Вы:</strong> ${f.answer}</div>
              ${f.correctAnswer ? `<div class="correct-answer">✓ ${f.correctAnswer}</div>` : ''}
            </div>
          </div>
        `).join("")}
        ${hiddenCount > 0 ? `
          <div style="text-align:center; padding:10px; color:var(--color-gray-500); font-size:0.9rem;">
            + ещё ${hiddenCount} ${hiddenCount === 1 ? 'ошибка' : 'ошибок'} (показаны первые 10)
          </div>
        ` : ''}
      `;
    }
  
    // ✅ Скрываем форму и кнопки, показываем результаты
    form.style.display = "none";
    document.querySelector(".nav-buttons").style.display = "none";
    resultsEl.classList.add("active");
    
    // 🔝 Прокручиваем к результатам
    resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  // ================= EVENT LISTENERS =================
  prevBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      renderQuestion(currentQuestion);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
      // Save writing answers
      const q = questions[currentQuestion];
      if (q.type === "writing") {
        const textarea = document.querySelector("textarea");
        if (textarea) answers[q.id] = textarea.value;
      }
      currentQuestion++;
      renderQuestion(currentQuestion);
    }
  });

  finishBtn.addEventListener("click", () => {
    // Save last writing answer
    const q = questions[currentQuestion];
    if (q.type === "writing") {
      const textarea = document.querySelector("textarea");
      if (textarea) answers[q.id] = textarea.value;
    }
    showResults();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (resultsEl.classList.contains("active")) return;
    if (e.key === "ArrowRight" && !nextBtn.classList.contains("hidden"))
      nextBtn.click();
    if (e.key === "ArrowLeft" && !prevBtn.disabled) prevBtn.click();
  });

  // ================= INIT =================
  renderQuestion(0);