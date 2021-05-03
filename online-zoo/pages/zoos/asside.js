const assideClose = document.querySelector(".aside-close");
const assideOpen = document.querySelector(".aside-open");
const CONTENT = document.querySelector(".content");
assideClose.addEventListener("click", () => {
  assideClose.style.display = "none";
  assideOpen.style.display = "block";
  CONTENT.style.marginTop = "-587px";
});
document.addEventListener("click", (e) => {
  if (e.target != assideClose) {
    assideClose.style.display = "block";
    assideOpen.style.display = "none";
    CONTENT.style.marginTop = "-252px";
  }
});
