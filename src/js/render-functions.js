import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const ulElem = document.querySelector('.gallery');
const gallery = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt', // Вказуємо, що підписи братимуться з атрибута 'alt' зображення
  captionDelay: 250, // Затримка появи підпису
});

export function createGallery(images) {
  const markup = templatesImage(images);
  ulElem.insertAdjacentHTML('afterbegin', markup);

  gallery.refresh();
}

export function clearGallery() {
  ulElem.innerHTML = ``;
}

export function showLoader() {
  const loader = `<span class="loader"></span>`;
  ulElem.insertAdjacentHTML('afterbegin', loader);
}

export function hideLoader() {
  const loader = ``;
  ulElem.innerHTML = loader;
}

function templateImage(img) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = img;
  return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a><div class="stats">
  <p class="img-rates">Likes<span>${likes}</span></p>
  <p class="img-rates">Views<span>${views}</span></p>
  <p class="img-rates">Comments<span>${comments}</span></p>
  <p class="img-rates">Downloads<span>${downloads}</span></p></div>
</li>
`;
}

function templatesImage(imgs) {
  console.log('imgs = ', imgs);
  return imgs.map(templateImage).join('\n');
}
