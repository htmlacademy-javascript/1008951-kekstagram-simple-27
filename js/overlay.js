import {isEscapeKey} from './utils.js';
import {uploadFormElement, setUserFormSubmit} from './form.js';
import {setDefaultSize} from './scale.js';
import {setDefaultEffect} from './effects.js';
import {closeError, isErrorVisible} from './error-message.js';

const overlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const uploadFileButton = uploadFormElement.querySelector('#upload-file');
const overlayCloseButton = uploadFormElement.querySelector('#upload-cancel');

const openUserModal = () => {
  overlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeOverlay = () => {
  uploadFormElement.reset();
  overlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  setDefaultSize();
  setDefaultEffect();
};

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (isErrorVisible()) {
      closeError(evt);
    } else {
      closeOverlay();
    }
  }
}

uploadFileButton.addEventListener('change', openUserModal);
overlayCloseButton.addEventListener('click', closeOverlay);
setUserFormSubmit(closeOverlay);
