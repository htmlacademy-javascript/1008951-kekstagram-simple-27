const checkLengthComment = (string, maxLength) => string.length <= maxLength;
checkLengthComment('hello', 10);

const isEscapeKey = (evt) => evt.key === 'Escape';

const resetStyleElement = (element) => {
  element.removeAttribute('style');
  element.removeAttribute('class');
};

export {checkLengthComment, isEscapeKey, resetStyleElement};
