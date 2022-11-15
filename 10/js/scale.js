const scaleElement = document.querySelector('.scale');
const scaleControlSmallerButton = scaleElement.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = scaleElement.querySelector('.scale__control--bigger');
const scaleControlInput = scaleElement.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');

const ImageSettings = {
  DEFAULT_SIZE: 100,
  MIN_SIZE: 25,
  MAX_SIZE: 100,
  STEP_SIZE: 25
};

const setDefaultSize = () => {
  scaleControlInput.value = `${ImageSettings.DEFAULT_SIZE}%`;
  previewImage.style.transform = `scale(${scaleControlInput.value / 100})`;
};

const scaleImage = () => {
  const currentValue = parseFloat(scaleControlInput.value);
  previewImage.style.transform = `scale(${currentValue / 100})`;
};

const zoomOut = () => {
  const currentScaleValue = parseFloat(scaleControlInput.value);
  if (currentScaleValue > ImageSettings.MIN_SIZE) {
    scaleControlInput.value = `${currentScaleValue - ImageSettings.STEP_SIZE}%`;
    scaleImage();
  }
};

const zoomIn = () => {
  const currentScaleValue = parseFloat(scaleControlInput.value);
  if (currentScaleValue < ImageSettings.MAX_SIZE) {
    scaleControlInput.value = `${currentScaleValue + ImageSettings.STEP_SIZE}%`;
    scaleImage();
  }
};


setDefaultSize();
scaleControlSmallerButton.addEventListener('click', zoomOut);
scaleControlBiggerButton.addEventListener('click', zoomIn);

export {previewImage, setDefaultSize};
