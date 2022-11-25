import {previewImage} from './scale.js';

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

let currentEffect;

const effects = {
  none: {
    filter: 'none',
    units: '',
    sliderSettings: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    },
  },
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

const slider = noUiSlider.create(effectLevelSlider, DEFAULT_SLIDER_OPTIONS);

const showUiSlider = () => {
  slider.updateOptions(currentEffect.sliderSettings);
  effectLevelElement.classList.remove('hidden');
};

slider.on('update', () => {
  const currentValue = slider.get();
  effectLevelInput.value = currentValue;
  const currentEffectName = effectsListElement.querySelector('input:checked').value;
  if (currentEffectName === 'none') {
    previewImage.style.filter = '';
  } else {
    const effect = effects[currentEffectName];
    previewImage.style.filter = `${effect.filter}(${currentValue}${effect.units})`;
  }
});

const addEffect = (evt) => {
  if (evt.target && evt.target.closest('input[type="radio"]')) {
    previewImage.classList = '';
    currentEffect = effects[evt.target.value];
    showUiSlider();
    if(evt.target.value === 'none') {
      previewImage.style.filter = '';
      previewImage.removeAttribute('class');
      effectLevelElement.classList.add('hidden');
    } else {
      previewImage.classList.add(`effects__preview--${evt.target.value}`);
    }
  }
};

const setDefaultEffect = () => {
  effectLevelElement.classList.add('hidden');
  previewImage.style.filter = '';
  previewImage.classList = '';
};

effectsListElement.addEventListener('click', addEffect);

export {setDefaultEffect};
