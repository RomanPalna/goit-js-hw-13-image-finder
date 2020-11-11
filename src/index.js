import ImageApiSevice from './apiService';
import teamplateHandlebars from './templates/image-card.hbs';

const imegeApiSevice = new ImageApiSevice();

const refs = {
  searchForm: document.querySelector('.search-form'),
  imageGallery: document.querySelector('.gallery'),
  terminator: document.querySelector('.terminator'),
};

refs.searchForm.addEventListener('input', onSearch);

function onSearch(event) {
  event.preventDefault();
  refs.imageGallery.innerHTML = '';

  fetchImages();
  imegeApiSevice.resetPage();

  if (!serchQuery) {
    return;
  }
}

function fetchImages() {
  const serchQuery = refs.searchForm.elements.query.value;

  imegeApiSevice.fetchImages(serchQuery).then(imageMarkup);
}

function imageMarkup(images) {
  refs.imageGallery.insertAdjacentHTML(
    'beforeend',
    teamplateHandlebars(images),
  );
}

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && imegeApiSevice.query !== '') {
      fetchImages();
      imegeApiSevice.incrementPage();
    }
  });
};

const observer = new IntersectionObserver(onEntry, {
  rootMargin: '150px',
});
observer.observe(refs.terminator);
