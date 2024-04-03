let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;

  let slides = document.getElementsByClassName("mySlides");

  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  //reseteo todaslas diapos en none para ocultarlas
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //reseteo la clase active de todoslos dot boton
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  //aplico vista y active poe indice
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
