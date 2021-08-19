const leftButtonS4 = document.querySelector("#ss2__button-1-container");
const rightButtonS4 = document.querySelector("#ss2__button-2-container");

const sliderS4 = document.querySelector("#slider-items");
const sliderS4Item = document.querySelector(".subsection-2__slider-item");
const htmlBody = document.body;

let position = 0;

let itemWidth =
  Number.parseInt(window.getComputedStyle(sliderS4Item).marginRight) +
  Number.parseInt(window.getComputedStyle(sliderS4Item).width);

leftButtonS4.addEventListener("click", translateLeft);

rightButtonS4.addEventListener("click", translateRight);

function checkSliderRightSideInBody() {
  let distance = sliderS4.getBoundingClientRect();

  // console.log(
  //   "right side in body: " +
  //     (initialSliderRightDistance - distance.width + distance.right <=
  //       (window.innerWidth || document.documentElement.clientWidth))
  // );
  // console.log("distance right: " + distance.right);

  return (
    distance.right - itemWidth <=
    (window.innerWidth || document.documentElement.clientWidth)
  );
}

function translateLeft() {
  if (position === 0) {
    leftButtonS4.removeEventListener("click", translateLeft);
    leftButtonS4.classList.add("disabled");
    return;
  }

  position -= 1;
  sliderS4.style.transform = "translateX(-" + itemWidth * position + "px)";
  // console.log("abs transX: " + -itemWidth * position + ", position: " + position);
  console.log("slider rect right: " + sliderS4.getBoundingClientRect().right);

  rightButtonS4.addEventListener("click", translateRight);
  rightButtonS4.classList.remove("disabled");

  removeActiveSliderItem();

  if (position === 0) {
    leftButtonS4.removeEventListener("click", translateLeft);
    leftButtonS4.classList.add("disabled");
    return;
  }
}

function translateRight() {
  position += 1;
  sliderS4.style.transform = "translateX(-" + itemWidth * position + "px)";
  console.log("slider rect right: " + sliderS4.getBoundingClientRect().right);
  // console.log("abs transX: " + -itemWidth * position + ", position: " + position);

  leftButtonS4.addEventListener("click", translateLeft);
  leftButtonS4.classList.remove("disabled");

  removeActiveSliderItem();

  if (checkSliderRightSideInBody()) {
    rightButtonS4.removeEventListener("click", translateRight);
    rightButtonS4.classList.add("disabled");
  }
}

function removeActiveSliderItem() {
  let activeSections = document.querySelectorAll("#slider-items .active");

  activeSections.forEach((section) => {
    section.classList.remove("active");
  });
}

document.body.addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("subsection-2__slider-item") &&
    !e.target.classList.contains("ss2__si__heading") &&
    !e.target.classList.contains("ss2__si__image") &&
    !e.target.classList.contains("ss2__si__image-img") &&
    !e.target.classList.contains("ss2__si__bullets") &&
    !e.target.classList.contains("ss2__si__bullet") &&
    !e.target.classList.contains("ss2__si__icon") &&
    !e.target.classList.contains("ss2__si_bullet-text") &&
    !e.target.classList.contains("ss2__si__text") &&
    !e.target.classList.contains("ss2__si__button-container") &&
    !e.target.classList.contains("ss2__si__button")
  ) {
    removeActiveSliderItem();
    return;
  }
});

const item1sliderS4 = document.querySelector("#ss2__slider-item-1");
const item2sliderS4 = document.querySelector("#ss2__slider-item-2");
const item3sliderS4 = document.querySelector("#ss2__slider-item-3");
const item4sliderS4 = document.querySelector("#ss2__slider-item-4");
const item5sliderS4 = document.querySelector("#ss2__slider-item-5");
const item6sliderS4 = document.querySelector("#ss2__slider-item-6");
const item7sliderS4 = document.querySelector("#ss2__slider-item-7");
const item8sliderS4 = document.querySelector("#ss2__slider-item-8");

function itemSliderAddActiveClass(itemNum, event) {
  let sliderItems = {
    1: item1sliderS4,
    2: item2sliderS4,
    3: item3sliderS4,
    4: item4sliderS4,
    5: item5sliderS4,
    6: item6sliderS4,
    7: item7sliderS4,
    8: item8sliderS4,
  };

  let item = sliderItems[itemNum];

  console.log(item);

  if (
    event.target.classList.contains("ss2__si__button-container") ||
    event.target.classList.contains("ss2__si__button")
  ) {
    return;
  }

  if (item.classList.contains("active")) {
    removeActiveSliderItem();
    return;
  }

  if (!item.classList.contains("active")) {
    removeActiveSliderItem();
    item.classList.add("active");
    return;
  }
}

item1sliderS4.addEventListener("click", function (e) {
  itemSliderAddActiveClass(1, e);
});

item2sliderS4.addEventListener("click", function (e) {
  itemSliderAddActiveClass(2, e);
});

item3sliderS4.addEventListener("click", function (e) {
  itemSliderAddActiveClass(3, e);
});

item4sliderS4.addEventListener("click", function (e) {
  itemSliderAddActiveClass(4, e);
});

item5sliderS4.addEventListener("click", function (e) {
  itemSliderAddActiveClass(5, e);
});

item6sliderS4.addEventListener("click", function (e) {
  itemSliderAddActiveClass(6, e);
});

item7sliderS4.addEventListener("click", function (e) {
  itemSliderAddActiveClass(7, e);
});

item8sliderS4.addEventListener("click", function (e) {
  itemSliderAddActiveClass(8, e);
});
