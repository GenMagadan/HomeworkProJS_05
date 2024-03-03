const imagesUrls = [
  'images/black-cat.jpg',
  'images/butterfly.jpg',
  'images/giraffe.jpg',
  'images/husky.jpg',
  'images/leopard.jpg',
  'images/white-tiger-cub.jpg',
];

const imageElement = document.querySelector('.image');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');

let currentIndex = 0;
imageElement.src = imagesUrls[currentIndex];

function nextImage() {
  currentIndex++;
  if (currentIndex >= imagesUrls.length) {
    currentIndex = 0;
  }
  imageElement.src = imagesUrls[currentIndex];
}

function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imagesUrls.length - 1;
  }
  imageElement.src = imagesUrls[currentIndex];
}

nextButton.addEventListener('click', nextImage);
previousButton.addEventListener('click', previousImage);

const paginationCircles = [];
const bottom = document.querySelector('.container__bottom');

function createPaginationCircle() {
  const div = document.createElement('div');
  div.className = 'pagination-circle';
  bottom.appendChild(div);
  paginationCircles.push(div);
}

function addPagination() {
  imagesUrls.forEach(createPaginationCircle);
  paginationCircles[0].classList.add('active');
  paginationCircles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      imageElement.src = imagesUrls[index];
      currentIndex = index;
    });
  });
}

addPagination();
