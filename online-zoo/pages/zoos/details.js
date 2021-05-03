const summary = document.querySelectorAll(".summary__text");
const details = document.querySelectorAll(".details");
const detailsText = document.querySelectorAll(".details__text");
const detailsAllText = document.querySelectorAll(".details-all-text");
const detailsArrow = document.querySelectorAll(".details-arrow");
summary.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (details[i].classList.contains("close")) {
      details[i].style.height = "102px";
      detailsAllText[i].style.height = "102px";
      detailsArrow[i].style.transform = "rotate(0deg)";
      detailsText[i].style.display = "block";
      details[i].classList.remove("close");
    } else {
      details[i].style.height = "21px";
      setTimeout(() => {
        detailsText[i].style.display = "none";
      }, 1000);
      detailsAllText[i].style.height = "21px";
      detailsArrow[i].style.transform = "rotate(-180deg)";
      details[i].classList.add("close");
    }
  });
});
detailsArrow.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (details[i].classList.contains("close")) {
      details[i].style.height = "102px";
      detailsAllText[i].style.height = "102px";
      detailsArrow[i].style.transform = "rotate(0deg)";
      detailsText[i].style.display = "block";
      details[i].classList.remove("close");
    } else {
      details[i].style.height = "21px";
      setTimeout(() => {
        detailsText[i].style.display = "none";
      }, 1000);
      detailsAllText[i].style.height = "21px";
      detailsArrow[i].style.transform = "rotate(-180deg)";
      details[i].classList.add("close");
    }
  });
});
