import ImageApiSevice from './apiService';
import teamplateHandlebars from './templates/image-card.hbs';
import debounce from 'lodash.debounce';

const imegeApiSevice = new ImageApiSevice();

const refs = {
  searchForm: document.querySelector('.search-form'),
  imageGallery: document.querySelector('.gallery'),
  terminator: document.querySelector('.terminator'),
};

refs.searchForm.addEventListener('input', debounce(onSearch, 1000));

function onSearch(event) {
  event.preventDefault();
  refs.imageGallery.innerHTML = '';
  imegeApiSevice.resetPage();
  observerImg();
}

function fetchingImages() {
  const serchQuery = refs.searchForm.elements.query.value;

  imegeApiSevice.fetchImages(serchQuery).then(imageMarkup);

  if (!serchQuery) {
    return;
  }
}

function imageMarkup(images) {
  refs.imageGallery.insertAdjacentHTML(
    'beforeend',
    teamplateHandlebars(images),
  );
}

function observerImg() {
  const onEntry = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        imegeApiSevice.incrementPage();
        fetchingImages();
      }
    });
  };

  const observer = new IntersectionObserver(onEntry, {
    rootMargin: '150px',
  });
  observer.observe(refs.terminator);
}

//Modal window
