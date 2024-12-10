// Flower animation
// https://codepen.io/theArtsy07/pen/oNPOVqB
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    // Update dots to reflect the current slide
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Show the specified slide
    function showSlides(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }

    // Next and previous slide functions
    function nextSlide() {
        showSlides(currentIndex + 1);
    }

    function prevSlide() {
        showSlides(currentIndex - 1);
    }

    // Add event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const index = parseInt(event.target.dataset.index, 10);
            showSlides(index);
        });
    });

    // Add event listeners for navigation buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Initialize slider
    showSlides(currentIndex);
});
