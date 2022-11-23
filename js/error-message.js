const errorMessageElement = document.querySelector('#error').content.querySelector('.error');
let errorVisible = false;
const isErrorVisible = () => errorVisible;

const showError = (textMessage, textButton) => {
  const errorMessageTemplate = errorMessageElement.cloneNode(true);

  errorMessageTemplate.querySelector('.error__title').textContent = textMessage;
  if (textButton) {
    errorMessageTemplate.querySelector('.error__button').textContent = textButton;
  }

  document.body.append(errorMessageTemplate);
  errorVisible = true;

  errorMessageTemplate.addEventListener('click', closeError);
};

function closeError(evt) {
  errorVisible = false;
  if (evt.target.closest('.error__inner') && !evt.target.closest('.error__button')) {
    return;
  }
  document.querySelector('.error').remove();
}

export {showError, isErrorVisible, closeError};
