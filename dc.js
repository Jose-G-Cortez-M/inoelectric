/*Pie de página*/
function updateYear() {
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById("currentYear");
    yearSpan.textContent = currentYear;
  }
  
  updateYear();

/*carrousel*/



const images = document.querySelectorAll('.slideshow img');
let currentImage = 0;

setInterval(() => {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}, 3000);
