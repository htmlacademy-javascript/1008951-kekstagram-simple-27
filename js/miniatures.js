import {pictures} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPictures = () => {
  const picturesListFragment = document.createDocumentFragment();

  pictures.forEach(({url, likes, comments}) => {
    const picture = pictureTemplate.cloneNode(true);

    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__comments').textContent = comments;
    picture.querySelector('.picture__likes').textContent = likes;

    picturesListFragment.append(picture);
  });

  picturesContainer.append(picturesListFragment);

};

export {renderPictures};
