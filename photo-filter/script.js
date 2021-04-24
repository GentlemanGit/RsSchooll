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
const btnNext = document.querySelector(".btn-next");
drawImage();
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
  const index = i % images.length;
  const imageSrc = base + images[index];
  imgHtml.src = imageSrc;
  i++;
  drawImage();
}
btnNext.addEventListener("click", changeImage);

/*Upload images*/
const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    imgHtml.src = reader.result;
    drawImage();
  };
  reader.readAsDataURL(file);
});

/*Filters value & change Filters */
const filterIn = document.querySelectorAll("input");
const filterOut = document.querySelectorAll("output");

filterIn.forEach((thisImput, i) => {
  thisImput.addEventListener("input", () => {
    filterOut[i].value = thisImput.value;
    drawImage();
  });
});
/*Reset Filters*/
const btnReset = document.querySelector(".btn-reset");

function resetFilters() {
  filterIn.forEach((thisImput, i) => {
    const resetValue = thisImput.dataset.rvalue;
    filterOut[i].value = resetValue;
    thisImput.value = resetValue;
    drawImage();
  });
}
btnReset.addEventListener("click", resetFilters);

/*Draw image*/
const canvas = document.querySelector("canvas");

function drawImage() {
  const img = new Image();
  img.setAttribute("crossOrigin", "anonymous");
  img.src = imgHtml.src;
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    const filterValue = `blur(${filterIn[0].value}px) invert(${filterIn[1].value}%) sepia(${filterIn[2].value}%) saturate(${filterIn[3].value}%) hue-rotate(${filterIn[4].value}deg)`;
    ctx.filter = filterValue;
    ctx.drawImage(img, 0, 0);
  };
}
/*Download image*/
const btnSave = document.querySelector(".btn-save");
btnSave.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "download.png";
  link.href = canvas.toDataURL();
  drawImage();
  link.click();
  link.delete;
});
