const carouselList = document.querySelector(".section2__slider-img");
const carouselItems = document.querySelectorAll(".animal");
const elems = Array.from(carouselItems);

carouselList.addEventListener("click", (event) => {
  const newActive = event.target;
  if (!newActive.closest(".animal")) {
    return;
  }
  update(newActive);
});

function update(newActive) {
  const newActivePos = newActive.dataset.pos;
  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);

  [current, prev, next, first, last].forEach((item) => {
    let itemPos = item.dataset.pos;
    item.dataset.pos = getPos(itemPos, newActivePos);
  });
}

function getPos(current, active) {
  const addition = current - active;

  if (Math.abs(current - active) > 2) {
    if (Number(current) < 0 && Number(active) === 2) {
      return Number(current) + 3;
    }

    if (Number(current) > 0 && Number(active) === -2) {
      return Number(current) - 3;
    }
    return -current;
  }
  return addition;
}
