// Pricing Calculator
document
  .getElementById("calculate-price")
  .addEventListener("click", function () {
    const weight = document.getElementById("weight").value;
    const distance = document.getElementById("distance").value;
    const price = (weight * 0.5 + distance * 0.3).toFixed(2);
    document.getElementById("price-result").querySelector("span").textContent =
      price;
  });

// Slideshow Controls
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
  });
}

prev.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
});

next.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
});
