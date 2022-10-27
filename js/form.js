const uploadFormElement = document.querySelector('#upload-select-image');

const validateCommentsToPhotos = new Pristine(uploadFormElement, {
  classTo: 'img-upload__text', errorTextParent: 'img-upload__text', errorTextClass: 'imp-upload__text-error',
});

uploadFormElement.addEventListener('submit', (evt) => {
  if (!validateCommentsToPhotos.validate()) {
    evt.preventDefault();
  }
});

export {uploadFormElement};
