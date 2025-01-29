
  // Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });
  
 
  // button back
  document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");
    let lastScrollPosition = 0;
  
    window.addEventListener("scroll", () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
  
      if (currentScroll > 100) {
        if (currentScroll < lastScrollPosition) {
          backToTopButton.classList.add("show");
          backToTopButton.classList.remove("hide");
        } else {
          backToTopButton.classList.add("hide");
          backToTopButton.classList.remove("show");
        }
      } else {
        backToTopButton.classList.remove("show");
        backToTopButton.classList.add("hide");
      }
  
      lastScrollPosition = currentScroll;
    });
  
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  // Привязываем обработчик событий для подменю
document.querySelectorAll('.menu__secondary-item').forEach(item => {
  item.addEventListener('mouseenter', function () {
    const imagePreview = this.closest('.has-submenu').querySelector('.menu__image');
    const imageSrc = this.dataset.image; // Получаем путь изображения из атрибута data-image

    if (imagePreview) {
      imagePreview.src = imageSrc; // Меняем изображение
    }

    // Показываем изображение при наведении на элемент подменю
    this.closest('.has-submenu').querySelector('.menu__image-preview').style.opacity = '1';
    this.closest('.has-submenu').querySelector('.menu__image-preview').style.visibility = 'visible';
  });

  item.addEventListener('mouseleave', function () {
    // Прячем изображение, когда курсор уходит с элемента
    this.closest('.has-submenu').querySelector('.menu__image-preview').style.opacity = '0';
    this.closest('.has-submenu').querySelector('.menu__image-preview').style.visibility = 'hidden';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.js-modal');
  const modalDialog = document.querySelector('.js-modal-dialog');
  const openBtn = document.querySelector('.js-btn-open');
  const closeBtn = document.querySelector('.js-btn-close');

  openBtn.addEventListener('click', () => {
      modal.classList.add('active');
      modalDialog.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      modalDialog.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.classList.remove('active');
          modalDialog.classList.remove('active');
      }
  });
});
const form = document.querySelector('.feedback__form');
    const submitButton = document.querySelector('#submit-button');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Останавливаем стандартное поведение формы

        const formData = new FormData(form);

        // Устанавливаем состояние загрузки (опционально)
        submitButton.textContent = 'Відправка...';
        submitButton.disabled = true;

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            // Успешно отправлено
            submitButton.textContent = 'Зроблено';
            submitButton.classList.add('success');
        } else {
            // Ошибка отправки
            submitButton.textContent = 'Помилка. Спробуйте ще раз';
            submitButton.disabled = false; // Разблокируем кнопку
        }
    });
    document.addEventListener("DOMContentLoaded", () => {
      gsap.registerPlugin(ScrollTrigger);
  
      // Aнимация для каждой буквы
      gsap.fromTo(
          ".letter",
          { opacity: 0, y: 100 },
          {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                  trigger: ".hero",
                  start: "top bottom",
                  toggleActions: "play none none none",
              },
          }
      );
  
      // Aнимация для подзаголовка
      gsap.fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 50 },
          {
              opacity: 1,
              y: 0,
              delay: 0.5,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                  trigger: ".hero",
                  start: "top bottom",
                  toggleActions: "play none none none",
              },
          }
      );
  
      // Aнимация для кнопки (появление после заголовка)
      gsap.fromTo(
          ".btn-outline",
          { opacity: 0, y: 50 },
          {
              opacity: 1,
              y: 0,
              delay: 1, // задержка появления кнопки
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                  trigger: ".hero",
                  start: "top bottom",
                  toggleActions: "play none none none",
              },
          }
      );
  });
 // Функция для управления позицией букв при скролле
window.addEventListener("scroll", () => {
  const letters = document.querySelectorAll(".letter");
  const scrollY = window.scrollY;

  letters.forEach((letter) => {
    const speed = letter.getAttribute("data-scroll-speed");
    const offset = scrollY * speed * 0.1; // Ускорение от атрибута
    letter.style.transform = `translateY(-${offset}px)`;
    letter.style.opacity = scrollY > 100 ? "0.5" : "1"; // Прозрачность при скролле вниз
  });
});
// Функция для обработки появления элементов
function handleFadeIn() {
  const fadeInElements = document.querySelectorAll('.fade-in');

  fadeInElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight - 50) {
      el.classList.add('visible'); // Добавляем класс visible, чтобы активировать анимацию
    }
  });
}

// Событие скролла
window.addEventListener('scroll', handleFadeIn);

// Инициализация на загрузке страницы
document.addEventListener('DOMContentLoaded', handleFadeIn);
document.addEventListener('scroll', () => {
  const timeline = document.querySelector('.timeline_progress-bar-2');
  const section = document.querySelector('.section-timeline-2');
  const sectionHeight = section.offsetHeight;
  const sectionTop = section.offsetTop;
  const scrollPos = window.scrollY + window.innerHeight;

  if (scrollPos > sectionTop && scrollPos < sectionTop + sectionHeight) {
    const progressHeight = ((scrollPos - sectionTop) / sectionHeight) * 100;
    timeline.style.height = `${progressHeight}%`;
  }
});

// Активируем круги при достижении их области
const circles = document.querySelectorAll('.timeline_circle');
window.addEventListener('scroll', () => {
  circles.forEach(circle => {
    const rect = circle.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      circle.classList.add('active');
    }
  });
});
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1.5, // Show partial slides on both sides
  spaceBetween: 30, // Space between slides
  centeredSlides: true, // Center the active slide
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
});
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Останавливаем стандартное поведение отправки формы

  const form = e.target;
  const formData = new FormData(form);
  const submitButton = form.querySelector(".submit-button");

  // Меняем текст кнопки на "Відправка..."
  submitButton.textContent = "Відправка...";
  submitButton.disabled = true; // Отключаем кнопку, чтобы предотвратить повторные клики

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // Меняем текст кнопки на галочку
      submitButton.textContent = "✔️";
      submitButton.style.backgroundColor = "transparent"; // Кнопка становится прозрачной
      submitButton.style.color = "purple"; // Галочка становится фиолетовой
      submitButton.style.border = "2px solid purple"; // Добавляем границу, если нужно
      submitButton.disabled = true; // Кнопка остаётся отключённой

      // Очищаем форму
      form.reset();
    } else {
      throw new Error("Failed to send the message. Please try again.");
    }
  } catch (error) {
    // Меняем текст кнопки на сообщение об ошибке
    submitButton.textContent = "❌ Error";
    submitButton.style.backgroundColor = "red"; // Красный фон для ошибки
    submitButton.style.color = "white";
    submitButton.disabled = false; // Включаем кнопку для повторной отправки
  } finally {
    // Возвращаем исходный текст кнопки через несколько секунд, если была ошибка
    if (submitButton.textContent.includes("❌")) {
      setTimeout(() => {
        submitButton.textContent = "Submit";
        submitButton.style.backgroundColor = ""; // Убираем стили фона
        submitButton.style.color = "";
        submitButton.style.border = ""; // Убираем границу
      }, 3000);
    }
  }
});
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let bgImage = document.querySelector(".bg-image");
  let overlay = document.querySelector(".overlay");
  let title = document.querySelector(".title");
  let subtitle = document.querySelector(".subtitle");
  let info = document.querySelector(".info");
  let textSection = document.querySelector(".text-section");

  // Эффект параллакса на фон
  bgImage.style.transform = `translateY(${scrollY * 0.3}px)`;

  // Затемнение фона при скролле
  overlay.style.opacity = Math.min(scrollY / 500, 1);

  // Скрытие заголовка при скролле
  title.style.opacity = Math.max(1 - scrollY / 300, 0);
  title.style.transform = `translateY(${scrollY * 0.3}px)`;

  subtitle.style.opacity = Math.max(1 - scrollY / 400, 0);
  info.style.opacity = Math.max(1 - scrollY / 400, 0);

  // Появление текста
  if (scrollY > 100) {
      textSection.style.opacity = "1";
      textSection.style.transform = "translateY(0)";
  }
});

