const myCarouselElement = document.querySelector('#carouselExampleSlidesOnly')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
  touch: false
})


/*const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselItems = document.querySelector('.hero__carousel-items');
let currentIndex = 0;
const totalItems = document.querySelectorAll('.hero__carousel-items li').length;
const itemsToShow = 4; // Cantidad de imágenes visibles al mismo tiempo

// Función para cambiar de slide
function changeSlide(direction) {
  if (direction === 'next') {
    currentIndex++;
    if (currentIndex === totalItems) {
      currentIndex = 0;
    }
  } else if (direction === 'prev') {
    if (currentIndex === 0) {
      currentIndex = totalItems - itemsToShow;
    } else {
      currentIndex--;
    }
  }

  const offset = -(100 / itemsToShow) * currentIndex;
  carouselItems.style.transform = `translateX(${offset}%)`;
}

// Botones de navegación
prevButton.addEventListener('click', () => changeSlide('prev'));
nextButton.addEventListener('click', () => changeSlide('next'));

// Desplazamiento automático de izquierda a derecha
setInterval(() => {
  changeSlide('next');
}, 3000); // Cambia cada 3 segundos

*/
