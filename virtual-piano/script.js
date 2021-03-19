/*Функция проигрывания аудиофайла */
function playAudio(file) {
  const audio = new Audio(); //Создаём элемент
  audio.src = file; //присваеваем полученное из функции название аудиофайла
  audio.currentTime = 0; // устанавливаем проигрывание аудиофайла сначала
  audio.play(); //проигрываем аудиофайл
}

/*Работа с мышью*/
const DOC = document.querySelectorAll(".piano-key"); //Записываем в константу все элементы с классом ".piano-key"
const PIANO = document.getElementById("piano"); //Записываем в константу элемент с id "piano"

/*Функция старта, запускает действия с полученной клавишей */
const start = (key) => {
  key.target.classList.add("active"); //Добавляем клавише класс "active"
  const note = key.target.dataset.note; //получаем ноту из data нажатой клавиши
  const file = `assets/audio/${note}.mp3`; //получаем аудиофайл по ноте
  playAudio(file); //по полученой ноте воспроизводим аудиофайл
};

/*Функция остановки, остановливает действия с полученной клавишей */
const stop = (key) => {
  key.target.classList.remove("active"); //убирает у клавиши класс "active"
};

/*Функция запуска по мышке, запускает действия с полученной клавишей*/
const startMauseElem = (key) => {
  if (key.target.classList.contains("piano-key")) {
    //если полученный элемент действительно клавиша
    const note = key.target.dataset.note; //получаем ноту из data нажатой клавиши
    const file = `assets/audio/${note}.mp3`; //получаем аудиофайл по ноте
    playAudio(file); //по полученой ноте воспроизводим аудиофайл
    key.target.classList.add("active"); //Добавляем клавише класс "active"
  }
  /*проходим все наши клавиши в html*/
  DOC.forEach((elem) => {
    elem.addEventListener("mouseover", start); // добавляем слушателя находящейся над клавишей пианино мыши
    elem.addEventListener("mouseout", stop); // добавляем слушателя находящейся  НЕ над клавишей пианино мыши
  });
};
/*Функция остановки по мышке, остановливает действия с полученной клавишей*/
const stopMauseElem = () => {
  /*проходим все наши клавиши в html*/
  DOC.forEach((elem) => {
    elem.classList.remove("active"); //убирает у клавиши класс "active"
    elem.removeEventListener("mouseover", start); // убираем слушателя находящейся над клавишей пианино мыши
    elem.removeEventListener("mouseout", stop); // добавляем слушателя находящейся  НЕ над клавишей пианино мыши
  });
};

PIANO.addEventListener("mousedown", startMauseElem); // добавляем слушателя нажатой кнопки мыши
document.querySelector("body").addEventListener("mouseup", stopMauseElem); // добавляем слушателя отпущенной кнопки мыши в любом месте документа

/*Работа с клавиатурой*/
/*при нажатии клавиши*/
window.addEventListener("keydown", (event) => {
  if (event.repeat) return; //отключаем повторное нажатие при зажатии клавиши
  /*пробегаем всю клаву*/
  DOC.forEach((keyBoard) => {
    if (event.code.slice(3, 4) === keyBoard.dataset.letter) {
      keyBoard.classList.add("active");
      const note = keyBoard.dataset.note; //получаем ноту из data нажатой клавиши
      const file = `assets/audio/${note}.mp3`; //получаем аудиофайл по ноте
      playAudio(file); //по полученой ноте воспроизводим аудиофайл
    } else return;
  });
});
/*при отпускании клавиши*/
window.addEventListener("keyup", (event) => {
  DOC.forEach((keyBoard) => {
    if (event.code.slice(3, 4) === keyBoard.dataset.letter)
      keyBoard.classList.remove("active");
  });
});
/*Fullscreen*/
document.addEventListener(
  "click",
  (event) => {
    /* Проверяем кнопку*/
    if (!event.target.classList.contains("fullscreen")) return;
    /* Если уже в полноэкранном режиме, перейти в оконный*/
    /* Иначе, снова перейти в полноэкранный*/
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  },
  false
);
