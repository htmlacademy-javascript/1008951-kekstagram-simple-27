import {galleryPhotos} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = galleryPhotos;
const picturesListFragment = document.createDocumentFragment();

pictures.forEach(({url, likes, comments}) => {
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__comments').textContent = comments;
  picture.querySelector('.picture__likes').textContent = likes;

  picturesListFragment.appendChild(picture);
});

picturesContainer.appendChild(picturesListFragment);
