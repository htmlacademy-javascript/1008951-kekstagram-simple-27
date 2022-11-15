// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getIntegerRandom = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Функция для проверки максимальной длины строки
const checkLengthComment = (string, maxLength) => string.length <= maxLength;
checkLengthComment('hello', 10);

const isEscapeKey = (evt) => evt.key === 'Escape';

// Убирает стили у элемента
const resetStyleElement = (element) => {
  element.removeAttribute('style');
  element.removeAttribute('class');
};

export {getIntegerRandom, checkLengthComment, isEscapeKey, resetStyleElement};
