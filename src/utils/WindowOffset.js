let offsetHeight = 0;

window.addEventListener('scroll', () => {
  offsetHeight = window.pageYOffset;
});

export const WindowOffset = {
  getOffsetHeight() {
    return offsetHeight;
  }
};
