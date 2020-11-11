export default class ImageApiSevice {
  constructor() {}

  fetchImages(serchQuery) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${serchQuery}&page=1&per_page=12&key=19045018-7ef62a7ed2607017cbe478eaf`;

    return fetch(url)
      .then(response => response.json())
      .then(console.log);
  }
}

// const BASE_URL = 'https://pixabay.com/api/';

// await function ImageApiSevise(image) {
//
// };
fetch(
  `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=19045018-7ef62a7ed2607017cbe478eaf`,
)
  .then(response => response.json())
  .then(console.log);
