document
  .querySelector(".section5__slider")
  .addEventListener("click", function (e) {
    let first;
    let last;
    let parent;
    parent = document.querySelector(".slider-ul");
    first = parent.querySelector(".slider-ul__testimonial");
    last = parent.querySelector(".slider-ul__testimonial:last-child");
    if (e.target.classList.contains("slider__arow-left")) {
      parent.appendChild(first);
    }
    if (e.target.classList.contains("slider__arow-right")) {
      parent.insertBefore(last, first);
    }
  });
