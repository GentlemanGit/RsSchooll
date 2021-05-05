const videos = document.querySelector(".small-videos");
let slideIndex = 0;
let imgWidth = document.querySelector(".small-video").offsetWidth + 20;
const slideFunc = () => {
  slideIndex += 1;
  if (slideIndex > 7) {
    if (!(slideIndex < 8)) {
      slideIndex = 0;
    }
  }
  videos.scrollTo(imgWidth * slideIndex, 0);
};

let autoSlideInterval = setInterval(slideFunc, 2000);
let autoSlideTimeout = null;

const delayAutoSliding = () => {
  clearTimeout(autoSlideTimeout);
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(() => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slideFunc, 2000);
  }, 0);
};

videos.addEventListener("click", delayAutoSliding);
videos.addEventListener("mouseover", delayAutoSliding);
/*
const allVidao = document.querySelectorAll(".vidaotwo");
const allContener = document.querySelectorAll(".part-two__vidao");

allContener.forEach((elem, index) => {
  console.log(allVidao[index].src);
  elem.addEventListener("click", () => {
    console.log(index);
  });
});
*/
