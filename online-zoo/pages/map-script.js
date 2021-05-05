/*move map*/
const allMap = document.querySelector(".all-map");
let zoom = 1;
let zoomX = 0;
let zoomY = 0;
let ZoomCounter = 0;

allMap.onmousedown = function (event) {
  btnCenter.style.backgroundColor = " #ffffff";
  let shiftX = event.clientX - allMap.getBoundingClientRect().left;
  let shiftY = event.clientY - allMap.getBoundingClientRect().top;
  if (ZoomCounter === 1) {
    zoomX = 87;
    zoomY = 56;
  } else if (ZoomCounter === 2) {
    zoomX = 187;
    zoomY = 120;
  } else if (ZoomCounter === 3) {
    zoomX = 302;
    zoomY = 194;
  } else if (ZoomCounter === 4) {
    zoomX = 435;
    zoomY = 279;
  } else if (ZoomCounter === 5) {
    zoomX = 589;
    zoomY = 377;
  } else {
    zoomX = 0;
    zoomY = 0;
  }
  document.body.append(allMap);
  moveAt(event.pageX, event.pageY);
  function moveAt(pageX, pageY) {
    allMap.style.left = pageX - shiftX + zoomX + "px";
    allMap.style.top = pageY - shiftY + zoomY + "px";
  }
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener("mousemove", onMouseMove);
  document.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    allMap.onmouseup = null;
  };
};

allMap.ondragstart = function () {
  return false;
};
/*Zoom*/
const zoomOut = document.querySelector(".map-button__minus");
const zoomIn = document.querySelector(".map-button__plus");
const btnCenter = document.querySelector(".map-button__center");
zoomIn.addEventListener("click", () => {
  if (zoom < 2) {
    ++ZoomCounter;
    zoom *= 1.15;
    allMap.style.transform = `scale(${zoom})`;
    if (zoom != 1) zoomOut.style.backgroundColor = " #ffffff";
    else zoomOut.style.backgroundColor = " gray";
    if (zoom > 2) zoomIn.style.backgroundColor = " gray";
    else zoomIn.style.backgroundColor = " #ffffff";
  }
});
zoomOut.addEventListener("click", () => {
  if (zoom > 1) {
    zoom /= 1.15;
    --ZoomCounter;
    allMap.style.transform = `scale(${zoom})`;
  }
  if (zoom != 1) zoomOut.style.backgroundColor = " #ffffff";
  else {
    zoomOut.style.backgroundColor = " gray";
    mapCenter();
  }
  if (zoom > 2) zoomIn.style.backgroundColor = " gray";
  else zoomIn.style.backgroundColor = " #ffffff";
});

btnCenter.addEventListener("click", mapCenter);
function mapCenter() {
  let margLeft = (document.body.offsetWidth - allMap.offsetWidth) / 2;
  allMap.style.top = "180px";
  allMap.style.left = margLeft + "px";
  btnCenter.style.backgroundColor = " gray";
}
