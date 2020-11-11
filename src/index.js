import ImageApiSevice from './apiService';
import teamplateHandlebars from './templates/image-card.hbs';

const imegeApiSevice = new ImageApiSevice();

const refs = {
  searchForm: document.querySelector('.search-form'),
  imageGallery: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('input', onSearch);

function onSearch(event) {
  event.preventDefault();

  const serchQuery = refs.searchForm.elements.query.value;

  imegeApiSevice.fetchImages(serchQuery).then(imageMarkup);
}

function imageMarkup(images) {
  refs.imageGallery.insertAdjacentHTML(
    'beforeend',
    teamplateHandlebars(images),
  );
}
