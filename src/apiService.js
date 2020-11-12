export default class ImageApiSevice {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  fetchImages(searchQuery) {
<<<<<<< Updated upstream
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${this.page}&per_page=12&key=19045018-7ef62a7ed2607017cbe478eaf`;
=======
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=19045018-7ef62a7ed2607017cbe478eaf`;
>>>>>>> Stashed changes

    return fetch(url).then(response => response.json());
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
}
