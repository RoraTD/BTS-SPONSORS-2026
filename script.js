let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block";
  }

  // Change slide every 6 seconds (6000 ms)
  setTimeout(showSlides, 6000);
}
