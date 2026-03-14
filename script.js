const slides = document.getElementById("slides");
const slide = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dotsContainer = document.getElementById("dots");


let index = 0;
const totalSlides = slide.length;

function createDots() {
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");

    if (i === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      index = i;
      updateCarousel();
    });

    dotsContainer.appendChild(dot);
  }
}

function updateCarousel() {
  slides.style.transform = `translateX(-${index * 100}%)`;

  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

createDots();

let slideInterval;
const carousel = document.querySelector('.carousel');

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

startAutoSlide();

carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);