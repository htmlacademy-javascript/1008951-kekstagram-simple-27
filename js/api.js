import {renderMiniatures} from './miniatures.js';
import {showError} from './error-message.js';
import {showSuccess} from './success-message.js';

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
      onFail('Не удалось загрузить фото. Попробуйте еще раз', 'Закрыть');
    }
  })
    .catch(() => {
      onFail('Не удалось загрузить фото. Попробуйте еще раз', 'Закрыть');
    });
};

export {getData, sendData};
