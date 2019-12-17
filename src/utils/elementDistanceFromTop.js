export default (element) => {
  let pos = 0;

  let nextElement = element;

  while (nextElement) {
    pos += element.offsetTop;
    nextElement = nextElement.offsetParent;
  }

  return pos;
};
