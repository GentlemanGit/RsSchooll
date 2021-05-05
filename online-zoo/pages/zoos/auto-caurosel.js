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

const allVideos = document.querySelectorAll(".click-video");
const smallVideos = document.querySelectorAll(".small-video");
const mainVideo = document.querySelector(".main-video");
allVideos.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    let srcMainVideo = mainVideo.src;
    let srcSmallVideo = smallVideos[index].src;
    mainVideo.src = srcSmallVideo;
    smallVideos[index].src = srcMainVideo;
  });
});
