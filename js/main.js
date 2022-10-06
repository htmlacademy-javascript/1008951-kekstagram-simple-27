// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getIntegerRandom(min, max) {
  if (min < 0 || max < 0 || min >= max) {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min) + min);
  //  Source: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

getIntegerRandom();

// Функция для проверки максимальной длины строки
const checkLengthComment = (string, maxLength) => string.length <= maxLength;

checkLengthComment();
