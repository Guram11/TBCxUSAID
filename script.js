//Slider Component
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider_btn-left");
  const btnRight = document.querySelector(".slider_btn-right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  setInterval(nextSlide, 5000);
};
slider();

//Mobile Navigation
const headerEl = document.querySelector(".header-container");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const overlay = document.querySelector(".overlay");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  overlay.classList.toggle("hidden");
});

window.addEventListener("click", function (event) {
  if (event.target === overlay) {
    headerEl.classList.remove("nav-open");
    overlay.classList.add("hidden");
  }
});

//Accordion component
const arrowDownIcon1 = document.querySelector(".arrowDown-icon1");
const arrowDownIcon2 = document.querySelector(".arrowDown-icon2");
const arrowDownIcon3 = document.querySelector(".arrowDown-icon3");

const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");

const answer1 = document.querySelector(".hidden-box1");
const answer2 = document.querySelector(".hidden-box2");
const answer3 = document.querySelector(".hidden-box3");

question1.addEventListener("click", () => {
  answer1.classList.toggle("hidden");
  answer2.classList.add("hidden");
  answer3.classList.add("hidden");
  arrowDownIcon1.classList.toggle("active");
  arrowDownIcon2.classList.remove("active");
  arrowDownIcon3.classList.remove("active");
});

question2.addEventListener("click", () => {
  answer2.classList.toggle("hidden");
  answer1.classList.add("hidden");
  answer3.classList.add("hidden");
  arrowDownIcon2.classList.toggle("active");
  arrowDownIcon1.classList.remove("active");
  arrowDownIcon3.classList.remove("active");
});

question3.addEventListener("click", () => {
  answer3.classList.toggle("hidden");
  answer2.classList.add("hidden");
  answer1.classList.add("hidden");
  arrowDownIcon3.classList.toggle("active");
  arrowDownIcon1.classList.remove("active");
  arrowDownIcon2.classList.remove("active");
});
