// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getIntegerRandom(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

getIntegerRandom();

// Функция для проверки максимальной длины строки
const checkLengthComment = (string, maxLength) => string.length <= maxLength;
checkLengthComment('hello', 10);

export {getIntegerRandom, checkLengthComment};
