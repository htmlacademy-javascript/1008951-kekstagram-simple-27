import {isEscapeKey} from './utils.js';
import {uploadFormElement, setUserFormSubmit} from './form.js';
import {setDefaultSize} from './scale.js';

const overlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const uploadFileButton = uploadFormElement.querySelector('#upload-file');
const overlayCloseButton = uploadFormElement.querySelector('#upload-cancel');

const openUserModal = () => {
  overlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscDown);
};

const closeOverlay = () => {
  setDefaultSize();
  uploadFormElement.reset();
  overlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscDown);
};

function onPopupEscDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeOverlay();
  }
}

uploadFileButton.addEventListener('change', openUserModal);
overlayCloseButton.addEventListener('click', closeOverlay);
setUserFormSubmit(closeOverlay);
