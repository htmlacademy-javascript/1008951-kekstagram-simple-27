import {renderMiniatures} from './miniatures.js';

const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((miniatures) => {
      renderMiniatures(miniatures);
    });
};

export {getData};
