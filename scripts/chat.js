 // 1. ДАННЫЕ: Замените это на ваши реальные диалоги
  // type: 'incoming' (ученик/слева) или 'outgoing' (преподаватель/справа)
  const chatData = [
    { type: 'incoming', name: 'Анна', text: 'Hi everyone! How do you say "мне нужно взять отпуск" naturally?', time: '10:42' },
    { type: 'outgoing', name: 'Маргарита (Tutor)', text: 'Hey Anna! You can say: "I need to take some time off" or "I\'d like to request some leave".', time: '10:43' },
    { type: 'incoming', name: 'Сергей', text: '"Time off" sounds much better than just "vacation". Thanks!', time: '10:44' },
    { type: 'incoming', name: 'Елена', text: 'By the way, is anyone joining the speaking club tonight?', time: '10:45' },
    { type: 'outgoing', name: 'Маргарита (Tutor)', text: 'Yes! We start at 7 PM Moscow time. Topic: "Travel Fails" 😂 Don\'t miss it!', time: '10:46' },
    { type: 'incoming', name: 'Анна', text: 'Perfect, I\'ll be there!', time: '10:47' },
    { type: 'incoming', name: 'Дмитрий', text: 'Quick question: "make a decision" or "do a decision"?', time: '10:50' },
    { type: 'outgoing', name: 'Маргарита (Tutor)', text: 'Always "MAKE a decision". We never "do" decisions :) ', time: '10:51' },
    { type: 'incoming', name: 'Дмитрий', text: 'Got it. Make decisions, do homework. Logic!', time: '10:52' }
  ];

  const container = document.getElementById('chatContainer');
  const typingIndicator = document.getElementById('typingIndicator');
  
  let currentIndex = 0;
  let isRunning = false;

  // Функция создания элемента сообщения
  function createMessageElement(data) {
    const div = document.createElement('div');
    div.className = `message ${data.type}`;
    
    // Время справа внизу
    const timeSpan = `<span class="message-time">${data.time}</span>`;
    
    div.innerHTML = `
      <span class="message-name">${data.name}</span>
      ${data.text}
      ${timeSpan}
    `;
    return div;
  }

  // Функция показа индикатора "Печатает..."
  function showTyping() {
    // Перемещаем индикатор внутрь контейнера, чтобы скролл работал корректно
    // Но визуально он должен быть перед новым сообщением
    container.appendChild(typingIndicator);
    typingIndicator.style.display = 'flex';
    container.scrollTop = container.scrollHeight;
  }

  // Функция скрытия индикатора
  function hideTyping() {
    typingIndicator.style.display = 'none';
  }

  // Основной цикл воспроизведения
  async function playCycle() {
    if (isRunning) return;
    isRunning = true;
    currentIndex = 0;

    // Если в контейнере что-то есть (после рестарта), чистим
    if (container.children.length > 0) {
        container.innerHTML = '';
    }

    for (let i = 0; i < chatData.length; i++) {
      // 1. Показываем "Печатает..."
      showTyping();
      
      // Ждем случайное время имитации набора (от 1 до 2 сек)
      await new Promise(r => setTimeout(r, 1000 + Math.random() * 1000));

      // 2. Скрываем "Печатает..." и добавляем сообщение
      hideTyping();
      const msgElement = createMessageElement(chatData[i]);
      container.appendChild(msgElement);
      
      // Автоскролл вниз
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });

      // Пауза перед следующим сообщением (чтение пользователем)
      // Чем длиннее текст, тем дольше пауза
      const readTime = Math.min(2000, 500 + (chatData[i].text.length * 30)); 
      await new Promise(r => setTimeout(r, readTime));
    }

    // 3. ЦИКЛ ЗАВЕРШЕН. Все сообщения выведены.
    // Ждем немного, чтобы пользователь дочитал последнее
    await new Promise(r => setTimeout(r, 3000));

    // 4. Очищаем и перезапускаем
    restartChat();
  }

  // Функция перезапуска (очистка + старт)
  function restartChat() {
    isRunning = false;
    
    // Плавное исчезновение контента (опционально, можно сделать мгновенно)
    container.style.opacity = '0';
    container.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      container.innerHTML = ''; // Полная очистка
      container.style.opacity = '1'; // Возвращаем видимость
      container.style.transition = 'none'; // Убираем переход для следующего цикла
      
      // Запускаем заново
      playCycle();
    }, 500);
  }

  // Запуск при загрузке страницы
  document.addEventListener('DOMContentLoaded', () => {
    // Небольшая задержка перед стартом, чтобы страница прогрузилась
    setTimeout(playCycle, 1000);
  });


        // FAQ Accordion
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.addEventListener("click", () => {
          item.classList.toggle("active");
        });
      });

      // Smooth scroll for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Fade in animation on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, observerOptions);

      document.querySelectorAll(".fade-in").forEach((el) => {
        observer.observe(el);
      });

      // Form submission handler
      document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Спасибо за заявку! Я свяжусь с вами в ближайшее время.");
        this.reset();
      });