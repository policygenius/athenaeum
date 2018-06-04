import elementDistanceFromTop from 'utils/elementDistanceFromTop';

const scrollToInput = () => {
  const focusedInput = document.activeElement;
  const modal = document.getElementsByClassName('ReactModal__Overlay')[0];
  const parent = focusedInput.offsetParent;

  const calc = elementDistanceFromTop(parent) - (window.innerHeight / 2);

  if (modal) {
    modal.scrollTop = calc;
  }
};

export default (dialogId) => {
  if (navigator.maxTouchPoints) {
    const inputs = document.querySelectorAll(`#${dialogId} input`);

    Array.prototype.forEach.call(inputs, (input) => {
      input.addEventListener('focus', scrollToInput);
    });

    window.addEventListener('resize', scrollToInput);
  }
};
