import {isEscapeKey} from './utils.js';

const successMessageElement = document.querySelector('#success').content.querySelector('.success');

const onEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    closeError(evt);
  }
};

const showSuccess = (textMessage, textButton) => {
  const successMessageTemplate = successMessageElement.cloneNode(true);

  successMessageTemplate.querySelector('.success__title').textContent = textMessage;
  if (textButton) {
    successMessageTemplate.querySelector('.success__button').textContent = textButton;
  }

  document.body.append(successMessageTemplate);

  successMessageTemplate.addEventListener('click', closeError);
  document.addEventListener('keydown', closeError);
};

function closeError(evt) {
  if (evt.target.closest('.success__inner') && !evt.target.closest('.success__button')) {
    return;
  }
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onEscKeyDown);
}

export {showSuccess};
