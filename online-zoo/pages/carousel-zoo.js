document
  .querySelector(".section3__slider")
  .addEventListener("click", function (e) {
    let first;
    let last;
    let parent;
    parent = document.querySelector(".section3__slider-img");
    first = parent.querySelector(".slider-item");
    last = parent.querySelector(".slider-item:last-child");
    if (e.target.classList.contains("slider__arow-left")) {
      parent.appendChild(first);
    }
    if (e.target.classList.contains("slider__arow-right")) {
      parent.insertBefore(last, first);
    }
  });
