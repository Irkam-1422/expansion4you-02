let options = { threshold: [0.5] };

const observer = (color, bgEl) => {
  return new IntersectionObserver((entry) => {
    entry.forEach((change) => {
      console.log(bgEl);
      if (change.isIntersecting && bgEl) {
        // change.target.style.background = color2;
        bgEl.style.background = color;
      }
    });
  }, options);
};

module.exports = {
  observer,
};
