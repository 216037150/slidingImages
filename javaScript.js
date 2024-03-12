
/*

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.firstElementChild.clientWidth;
  let currentSlide = 0;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.children.length;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }
  setInterval(nextSlide, 700); 
});
*/


document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.firstElementChild.clientWidth;
  let currentSlide = 0;
  let intervalId;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.children.length;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  function startSlider() {
    intervalId = setInterval(nextSlide, 450);
  }

  function stopSlider() {
    clearInterval(intervalId);
  }

  // Start the slider initially
  startSlider(); 

  // Stop slider on mouse enter
  // Restart slider on mouse leave
  slides.addEventListener('mouseenter', stopSlider); 
  slides.addEventListener('mouseleave', startSlider); 
});
