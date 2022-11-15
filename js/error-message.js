import {isEscapeKey} from './utils.js';

const errorMessageElement = document.querySelector('#error').content.querySelector('.error');

const showError = (textMessage, textButton) => {
  const errorMessageTemplate = errorMessageElement.cloneNode(true);

  errorMessageTemplate.querySelector('.error__title').textContent = textMessage;
  if (textButton) {
    errorMessageTemplate.querySelector('.error__button').textContent = textButton;
  }

  document.body.append(errorMessageTemplate);

  errorMessageTemplate.addEventListener('click', closeError);
  document.addEventListener('keydown', onEscKeydown);
};

function onEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeError(evt);
  }
}

function closeError(evt) {
  if (evt.target.closest('.error__inner') && !evt.target.closest('.error__button')) {
    return;
  }
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onEscKeydown);
}

export {showError};
