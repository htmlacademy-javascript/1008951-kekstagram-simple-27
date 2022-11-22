import {previewImage} from './scale.js';
import {resetStyleElement} from './utils.js';

let currentEffect;

const DEFAULT_SLIDER_OPTIONS = {
  range: {
    min: 0,
    max: 100
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
};

const Effects = {
  chrome: {
    filter: 'grayscale',
    units: '',
    sliderSettings: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },
  sepia: {
    filter: 'sepia',
    units: '',
    sliderSettings: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },
  marvin: {
    filter: 'invert',
    units: '%',
    sliderSettings: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    }
  },
  phobos: {
    filter: 'blur',
    units: 'px',
    sliderSettings: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  },
  heat: {
    filter: 'brightness',
    units: '',
    sliderSettings: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  }
};

const effectsListElement = document.querySelector('.effects__list');
const effectLevelElement = document.querySelector('.effect-level');
const effectLevelSlider = effectLevelElement.querySelector('.effect-level__slider');
const effectLevelInput = effectLevelElement.querySelector('.effect-level__value');

noUiSlider.create(effectLevelSlider, DEFAULT_SLIDER_OPTIONS);

const hideUiSlider = () => {
  effectLevelSlider.classList.add('hidden');
  effectLevelInput.value = '';
};

const showUiSlider = () => {
  effectLevelSlider.noUiSlider.updateOptions(currentEffect.sliderSettings);
  effectLevelSlider.classList.remove('hidden');
  effectLevelSlider.noUiSlider.on('update', () => {
    previewImage.style.filter = `${currentEffect.filter}(${effectLevelSlider.noUiSlider.get()}${currentEffect.units})`;
    effectLevelInput.value = effectLevelSlider.noUiSlider.get();
  });
};

const setUiSliderSettings = (evt) => {
  if (evt.target.value === 'none') {
    hideUiSlider();
    resetStyleElement(previewImage);
  } else {
    showUiSlider();
  }
};

const addEffect = (evt) => {
  if (evt.target && evt.target.closest('input[type="radio"]')) {
    currentEffect = Effects[evt.target.value];
    previewImage.removeAttribute('class');
    previewImage.classList.add(`effects__preview--${evt.target.value}`);
    setUiSliderSettings(evt);
  }
};

const setDefaultEffect = () => {
  effectLevelSlider.classList.add('hidden');
  previewImage.style.filter = '';
  previewImage.classList = '';
};

hideUiSlider();
effectsListElement.addEventListener('click', addEffect);

export {setDefaultEffect};
