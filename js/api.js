import {renderMiniatures} from './miniatures.js';
import {showError} from './error-message.js';

const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((miniatures) => {
      renderMiniatures(miniatures);
    }).catch(() => {
      showError('Не удалось загрузить фото с сервера', 'Закрыть');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body
  }).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail('Ошибка загрузки файла', 'Попробовать еще раз');
    }
  })
    .catch(() => {
      onFail('Ошибка загрузки файла', 'Попробовать еще раз');
    });
};

export {getData, sendData};
