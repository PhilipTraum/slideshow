var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide(n) {
  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlide].style.display = "block";
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  setTimeout(showSlide, 2000); // Cambia la imagen cada 2 segundos
}

showSlide(currentSlide);