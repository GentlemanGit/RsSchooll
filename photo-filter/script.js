/*Fullscreen*/
document.getElementById("FS").addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
});
/*Next Image*/
const baseDay =
  "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/";
const baseEvening =
  "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/";
const baseMorning =
  "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/";
const baseNight =
  "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/";
const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];
let i = 0;
let base = baseDay;
const imgHtml = document.querySelector("img");
const btn = document.querySelector(".btn-next");

function changeImage() {
  let now = new Date().getHours();
  if (now >= 6 && now < 12) {
    base = baseMorning;
  }
  if (now >= 12 && now < 18) {
    base = baseDay;
  }
  if (now >= 18 && now <= 23) {
    base = baseEvening;
  }
  if (now >= 0 && now < 6) {
    base = baseNight;
  }
  console.log(base);
  const index = i % images.length;
  const imageSrc = base + images[index];
  imgHtml.src = imageSrc;
  i++;
}
btn.addEventListener("click", changeImage);
