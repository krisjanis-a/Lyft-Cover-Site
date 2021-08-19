const slider = document.querySelector("#carousel-container__items");
const carousel = document.querySelector("#carousel-container__items-wrapper");

const rightButton = document.querySelector("#carousel__right-button");
const leftButton = document.querySelector("#carousel__left-button");

const buttonItem1 = document.querySelector("#dot-1");
const buttonItem2 = document.querySelector("#dot-2");
const buttonItem3 = document.querySelector("#dot-3");
const buttonItem4 = document.querySelector("#dot-4");

// CHECK VIEWPORT SIZE AND DETERMINE OFFSET FOR CAROUSEL

let offset = 12.5;

let offsetBelow1000px = 0; // OFFSET FOR VIEWPORT WIDTH < 1000PX | MOVES SLIDER BY ONE ITEM WIDTH SO ACTIVE ITEM IS IN CENTER

// ACTIVE SECTION INDEX => BEGINS FROM 0 !!! Items and corresponding indices:
// ITEM-3 - 0 | ITEM-4 - 1 | ITEM-1 - 2 | ITEM-2 - 3 | ITEM-3 - 4 | | ITEM-4 - 5 | ITEM-1 - 6 | ITEM-2 - 7

let activeSectionIndex = 3;

// function changesOnLoadS3() {
//   if (window.innerWidth <= 1000) {
//     slider.style.transition = "none";
//     offsetBelow1000px = 12.5;
//     slider.style.transform =
//       "translate(" +
//       (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
//       "%)";
//     setTimeout(function () {
//       slider.style.transition = "transform 1s";
//     });
//   }
//   if (window.innerWidth > 1000) {
//     offsetBelow1000px = 0;
//     slider.style.transition = "none";
//     slider.style.transform =
//       "translate(" +
//       (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
//       "%)";
//     setTimeout(function () {
//       slider.style.transition = "transform 1s";
//     });
//   }
//   // console.log(
//   //   "innerwidth on load: " + window.innerWidth + "; offset: " + offset
//   // );
// }

// function changesOnResizeS3() {
//   if (window.innerWidth <= 1000) {
//     // console.log("innerwidth smaller or equal to 1000px");
//     slider.style.transition = "none";
//     offsetBelow1000px = 12.5;
//     slider.style.transform =
//       "translate(" +
//       (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
//       "%)";
//     setTimeout(function () {
//       slider.style.transition = "transform 1s";
//     });
//   }

//   if (window.innerWidth > 1000) {
//     // console.log("innerwidth larger than 1000px");
//     slider.style.transition = "none";
//     offsetBelow1000px = 0;
//     slider.style.transform =
//       "translate(" +
//       (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
//       "%)";
//     setTimeout(function () {
//       slider.style.transition = "transform 1s";
//     });
//   }
// }

// BUTTON TO MOVE CAROUSEL TO LEFT

leftButton.addEventListener("click", function () {
  // console.log("left");

  activeSectionIndex -= 1;

  slider.style.transform =
    "translate(" +
    (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
    "%)";

  // console.log(
  //   "calculated absolute offset: " +
  //     (-offsetBelow1000px + -offset * (activeSectionIndex - 1))
  // );
  // console.log("active section index: " + activeSectionIndex);

  slider.addEventListener("transitionstart", disableAllButtons);

  if (activeSectionIndex === 6) {
    slider.addEventListener("transitionend", rollBackwards);
  }

  if (activeSectionIndex === 1) {
    slider.addEventListener("transitionend", rollForwards);
  }

  setActiveSection();
  setActiveDot();

  slider.addEventListener("transitionend", enableAllButtons);
});

// BUTTON TO MOVE CAROUSEL TO RIGHT

rightButton.addEventListener("click", function () {
  // console.log("right");

  activeSectionIndex += 1;

  slider.style.transform =
    "translate(" +
    (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
    "%)";

  // console.log(
  //   "calculated absolute offset: " +
  //     (-offsetBelow1000px + -offset * (activeSectionIndex - 1))
  // );
  // console.log("active section index: " + activeSectionIndex);

  slider.addEventListener("transitionstart", disableAllButtons);

  if (activeSectionIndex === 6) {
    slider.addEventListener("transitionend", rollBackwards);
  }

  if (activeSectionIndex === 1) {
    slider.addEventListener("transitionend", rollForwards);
  }

  setActiveSection();
  setActiveDot();

  slider.addEventListener("transitionend", enableAllButtons);
});

// WHEN DISPLAYING ITEM-4#5 AND CLICKING MOVE RIGHT (MOVE FROM ITEM-4#5 => ITEM-1#6) - JUMPS FROM ITEM-1#6 => ITEM-1#2 WITHOUT VISIBLE TRANSITION TO ENSURE INFINITE SCROLL

function rollBackwards() {
  // console.log("roll backwards");

  activeSectionIndex = 2;
  // console.log("active section index: " + activeSectionIndex);

  slider.style.transition = "none";
  slider.style.transform =
    "translate(" +
    (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
    "%)";

  setTimeout(function () {
    slider.style.transition = "transform 1s";
  });

  slider.removeEventListener("transitionend", rollBackwards);
}

// WHEN DISPLAYING ITEM-1#2 AND CLICKING MOVE LEFT (MOVE FROM ITEM-1#2 => ITEM-4#1) - JUMPS FROM ITEM-4#1 => ITEM-4#5 WITHOUT VISIBLE TRANSITION TO ENSURE INFINITE SCROLL

function rollForwards() {
  // console.log("roll forwards");

  activeSectionIndex = 5;
  // console.log("active section index: " + activeSectionIndex);

  slider.style.transition = "none";
  slider.style.transform =
    "translate(" +
    (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
    "%)";

  setTimeout(function () {
    slider.style.transition = "transform 1s";
  });

  slider.removeEventListener("transitionend", rollForwards);
}

buttonItem1.addEventListener("click", function () {
  activeSectionIndex = 2;

  slider.style.transform =
    "translate(" +
    (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
    "%)";
  // console.log("active section index: " + activeSectionIndex);

  slider.addEventListener("transitionstart", disableAllButtons);
  setActiveSection();
  setActiveDot();
  slider.addEventListener("transitionend", enableAllButtons);
});

buttonItem2.addEventListener("click", function () {
  activeSectionIndex = 3;
  // console.log("active section index: " + activeSectionIndex);

  slider.style.transform =
    "translate(" +
    (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
    "%)";

  slider.addEventListener("transitionstart", disableAllButtons);
  setActiveSection();
  setActiveDot();
  slider.addEventListener("transitionend", enableAllButtons);
});

buttonItem3.addEventListener("click", function () {
  activeSectionIndex = 4;
  // console.log("active section index: " + activeSectionIndex);

  slider.style.transform =
    "translate(" +
    (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
    "%)";

  slider.addEventListener("transitionstart", disableAllButtons);
  setActiveSection();
  setActiveDot();
  slider.addEventListener("transitionend", enableAllButtons);
});

buttonItem4.addEventListener("click", function () {
  activeSectionIndex = 5;
  // console.log("active section index: " + activeSectionIndex);

  slider.style.transform =
    "translate(" +
    (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
    "%)";

  slider.addEventListener("transitionstart", disableAllButtons);
  setActiveSection();
  setActiveDot();
  slider.addEventListener("transitionend", enableAllButtons);
});

function setActiveDot() {
  document
    .querySelector("#controls__dots-container .item-active")
    .classList.remove("item-active");

  if (activeSectionIndex === 2 || activeSectionIndex === 6) {
    buttonItem1.classList.add("item-active");
  }

  if (activeSectionIndex === 3) {
    buttonItem2.classList.add("item-active");
  }

  if (activeSectionIndex === 4) {
    buttonItem3.classList.add("item-active");
  }

  if (activeSectionIndex === 5 || activeSectionIndex === 1) {
    buttonItem4.classList.add("item-active");
  }
}

function setActiveSection() {
  let activeSections = document.querySelectorAll(
    "#carousel-container__items .item-active"
  );

  activeSections.forEach((section) => {
    section.classList.remove("item-active");
  });

  if (activeSectionIndex === 2 || activeSectionIndex === 6) {
    let item1sections = document.querySelectorAll(".carousel__item-1");

    item1sections.forEach((item) => {
      item.classList.add("item-active");
    });
  }

  if (activeSectionIndex === 3) {
    let item1sections = document.querySelectorAll(".carousel__item-2");

    item1sections.forEach((item) => {
      item.classList.add("item-active");
    });
  }

  if (activeSectionIndex === 4) {
    let item1sections = document.querySelectorAll(".carousel__item-3");

    item1sections.forEach((item) => {
      item.classList.add("item-active");
    });
  }

  if (activeSectionIndex === 5 || activeSectionIndex === 1) {
    let item1sections = document.querySelectorAll(".carousel__item-4");

    item1sections.forEach((item) => {
      item.classList.add("item-active");
    });
  }
}

function disableAllButtons() {
  leftButton.disabled = true;
  rightButton.disabled = true;

  document.querySelector("#carousel__item-1-button").disabled = true;
  document.querySelector("#carousel__item-2-button").disabled = true;
  document.querySelector("#carousel__item-3-button").disabled = true;
  document.querySelector("#carousel__item-4-button").disabled = true;

  slider.removeEventListener("transitionstart", disableAllButtons);
}

function enableAllButtons() {
  leftButton.disabled = false;
  rightButton.disabled = false;

  document.querySelector("#carousel__item-1-button").disabled = false;
  document.querySelector("#carousel__item-2-button").disabled = false;
  document.querySelector("#carousel__item-3-button").disabled = false;
  document.querySelector("#carousel__item-4-button").disabled = false;

  slider.removeEventListener("transitionend", enableAllButtons);
}
