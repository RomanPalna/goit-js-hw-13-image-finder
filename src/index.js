import ImageApiSevice from './apiService';

const imegeApiSevice = new ImageApiSevice();

const refs = {
  searchForm: document.querySelector('.search-form'),
};

console.dir(refs.searchForm);

refs.searchForm.addEventListener('input', onSearch);

function onSearch(event) {
  event.preventDefault();

  serchQuery = refs.searchForm.elements.query.value;

  imegeApiSevice.fetchImages(serchQuery);
}

console.dir(refs.searchForm.elements.query.value);
