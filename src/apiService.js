export default class ImageApiSevice {
  constructor() {
    this.page = 0;
    this.searchQuery = '';
  }

  async fetchImages(searchQuery) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${this.page}&per_page=12&key=19045018-7ef62a7ed2607017cbe478eaf`;

    // return fetch(url).then(response => response.json());

    const response = await fetch(url);
    const images = await response.json();

    return images;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
