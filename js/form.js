import {sendData} from './api.js';
import {showError} from './error-message.js';
import {showSuccess} from './success-message.js';

const uploadFormElement = document.querySelector('#upload-select-image');
const submitButton = document.querySelector('.img-upload__submit');

const validateCommentsToPhotos = new Pristine(uploadFormElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'imp-upload__text-error',
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (validateCommentsToPhotos.validate()) {
      blockSubmitButton();
      sendData(() => {
        onSuccess();
        showSuccess('Изображение успешно загружено', 'Круто');
        unblockSubmitButton();
      }, () => {
        showError('Ошибка загрузки файла', 'Попробовать еще раз');
        unblockSubmitButton();
      }, new FormData(evt.target));
    }
  });
};

export {uploadFormElement, setUserFormSubmit};
