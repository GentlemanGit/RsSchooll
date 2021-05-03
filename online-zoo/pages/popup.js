/*popup*/
const btnDFV = document.querySelector(".footer__button");
const popup = document.querySelector(".popup");
const popupBg = document.querySelector(".popup-bg");
const popup1 = document.querySelector(".popup-first");
const popup2 = document.querySelector(".popup-second");
/*open popup*/
btnDFV.addEventListener("click", () => {
  popup.style.display = "block";
  popupBg.style.display = "block";
  document.body.style.overflow = "hidden";
});
/*first popup*/
/*amount*/
const amount = document.querySelector(".amount");
amount.oninput = () => {
  if (amount.value.length > 4) {
    amount.value = amount.value.slice(0, 4);
  }
};
/*Change popup*/
const btnNext = document.querySelector(".btn-next");
const title = document.querySelector("title");
btnNext.addEventListener("click", displaySecondPopup);

function displaySecondPopup() {
  if (amount.value.length != 0) {
    popup1.style.display = "none";
    popup.style.height = "390px";
    popup2.style.display = "block";
    popup.style.background =
      "url(../assets/popup-pay.svg) white no-repeat center";
    if (title.textContent != "Map" && title.textContent != "online-zoo")
      popup.style.background =
        "url(../../assets/popup-pay.svg) white no-repeat center";
  } else alert("Enter the amount!");
}

/*second popup*/
/*card-number*/
const cardNumber = document.querySelector(".card-number");
cardNumber.oninput = () => {
  if (cardNumber.value.length > 16) {
    cardNumber.value = cardNumber.value.slice(0, 16);
  }
};
/*card-date*/
const cardDateMM = document.querySelector(".mm");
cardDateMM.oninput = () => {
  if (cardDateMM.value.length > 2) {
    cardDateMM.value = cardDateMM.value.slice(0, 2);
  }
};
const cardDateYY = document.querySelector(".yy");
cardDateYY.oninput = () => {
  if (cardDateYY.value.length > 2) {
    cardDateYY.value = cardDateYY.value.slice(0, 2);
  }
};

/*card-cvc*/
const cardCVC = document.querySelector(".card-cvc");
cardCVC.oninput = () => {
  if (cardCVC.value.length > 3) {
    cardCVC.value = cardCVC.value.slice(0, 3);
  }
};

/*donate*/
const btnDonate = document.querySelector(".btn-donate");
btnDonate.addEventListener("click", donate);
const cardName = document.querySelector(".card-name");
function donate() {
  if (
    cardCVC.value.length == 3 &&
    cardDateYY.value.length == 2 &&
    cardDateMM.value.length == 2 &&
    cardNumber.value.length == 16 &&
    cardName.value.length != 0
  ) {
    popup1.style.display = "flex";
    popup2.style.display = "none";
    popup.style.height = "340px";
    popup.style.background = "white";
    popup.style.display = "none";
    popupBg.style.display = "none";
    alert("Thank you for your donation!)");
  } else alert("Enter correct card details!");
}
/*close popup*/
const btnClose = document.querySelector(".btn-close");
btnClose.addEventListener("click", popupOff);
popupBg.addEventListener("click", popupOff);
const popup3 = document.querySelector(".popup-third");
function popupOff() {
  popup1.style.display = "flex";
  popup2.style.display = "none";
  popup3.style.display = "none";
  popup.style.height = "340px";
  popup.style.background = "white";
  popup.style.display = "none";
  popupBg.style.display = "none";
  document.body.style.overflow = "auto";
}
/*Feedback popup*/
const feedbackLink = document.querySelector(".feedback");
if (document.querySelector(".section5__button")) {
  const btnfeedback = document.querySelector(".section5__button");
  btnfeedback.addEventListener("click", FeedbackPopup);
}

feedbackLink.addEventListener("click", FeedbackPopup);
function FeedbackPopup() {
  popup.style.display = "block";
  popupBg.style.display = "block";
  document.body.style.overflow = "hidden";
  popup1.style.display = "none";
  popup.style.height = "436px";
  popup3.style.display = "flex";
}

/*Valid */
const userName = document.querySelector(".user-name");
const userEmail = document.querySelector(".user-email");
const userFeed = document.querySelector(".feedback-text");
const btnSubmit = document.querySelector(".btn-submit");

function validate() {
  if (
    userName.validity.valid &&
    userEmail.validity.valid &&
    userFeed.validity.valid
  ) {
    btnSubmit.style.backgroundColor = "#70cb0e";
  }
}

userName.addEventListener("input", () => {
  validate();
});

userEmail.addEventListener("input", () => {
  validate();
});

userFeed.addEventListener("input", () => {
  validate();
});
/* not rebut page */
const forma = document.querySelector(".feedback-form");
forma.addEventListener("submit", (e) => {
  e.preventDefault();
  popup.style.display = "none";
  document.body.style.overflow = "auto";
  popupBg.style.display = "none";
  userName.value = "";
  userEmail.value = "";
  userFeed.value = "";
});
