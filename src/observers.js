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
      if (change.isIntersecting) {
        console.log("show");
        if (time) {
          setTimeout(() => {
            change.target.style.opacity = 1;
          }, time);
        } else {
          change.target.style.opacity = 1;
        }
      } else {
        console.log("hide");
        change.target.style.opacity = 0;
      }
    });
  }, options);
};

module.exports = {
  observer,
  observer_op,
};
