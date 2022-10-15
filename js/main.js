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

const GALLERY_LENGTH = 25;
const DESCRIPTION = ['desc-1', 'desc-2', 'desc-3', 'desc-4', 'desc-5', 'desc-6', 'desc-7', 'desc-8', 'desc-9', 'desc-10', 'desc-11', 'desc-12', 'desc-13', 'desc-14', 'desc-15', 'desc-16', 'desc-17', 'desc-18', 'desc-19', 'desc-20', 'desc-21', 'desc-22', 'desc-23', 'desc-24', 'desc-25'];

const getPhotoDescription = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTION[index],
  likes: getIntegerRandom(15, 200),
  comments: getIntegerRandom(0, 200)
});

const galleryPhotos = Array.from({length: GALLERY_LENGTH}, (_, index) => getPhotoDescription(index));

galleryPhotos();
