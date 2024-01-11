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

const observer_op = (time) => {
  return new IntersectionObserver((entry) => {
    entry.forEach((change) => {
      const transform = change.target.style.transform;
      if (change.isIntersecting) {
        console.log("show");
        if (time) {
          setTimeout(() => {
            change.target.style.opacity = 1;
            change.target.style.transform = 'none';
          }, time);
        } else {
          change.target.style.opacity = 1;
          change.target.style.transform = 'none';
        }
      } else {
        console.log("hide");
        change.target.style.opacity = 0;
        change.target.style.transform = transform;
      }
    });
  }, options);
};

module.exports = {
  observer,
  observer_op,
};
