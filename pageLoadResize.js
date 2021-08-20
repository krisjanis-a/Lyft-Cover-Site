window.onload = pageLoad;

window.onresize = pageResize;

function pageLoad() {
  changesOnLoadHeader();
  changesOnLoadS3();
  changesOnLoadS4();
}

function pageResize() {
  changesOnResizeHeader();
  changesOnResizeS3();
  changesOnResizeS4();
}

// SETUP FOR HEADER ON LOAD AND RESIZE

function changesOnResizeHeader() {
  if (window.innerWidth > 1000) {
    barsIcon.classList.add("active");
    timesIcon.classList.remove("active");
    navMenuMobile.style.left = "-100%";
    navMenuMobile.style.opacity = "0";
    menuActive = false;
    return;
  }
}

function changesOnLoadHeader() {
  barsIcon.classList.add("active");
  timesIcon.classList.remove("active");
  navMenuMobile.style.left = "-100%";
  navMenuMobile.style.opacity = "0";
  menuActive = false;
  return;
}

// SETUP ON PAGE LOAD SECTION 3

function changesOnLoadS3() {
  if (window.innerWidth <= 1000) {
    slider.style.transition = "none";
    offsetBelow1000px = 12.5;
    slider.style.transform =
      "translate(" +
      (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
      "%)";
    setTimeout(function () {
      slider.style.transition = "transform 1s";
    });
  }
  if (window.innerWidth > 1000) {
    offsetBelow1000px = 0;
    slider.style.transition = "none";
    slider.style.transform =
      "translate(" +
      (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
      "%)";
    setTimeout(function () {
      slider.style.transition = "transform 1s";
    });
  }
  // console.log(
  //   "innerwidth on load: " + window.innerWidth + "; offset: " + offset
  // );
}

// SETUP ON RESIZE SECTION 3

function changesOnResizeS3() {
  if (window.innerWidth <= 1000) {
    // console.log("innerwidth smaller or equal to 1000px");
    slider.style.transition = "none";
    offsetBelow1000px = 12.5;
    slider.style.transform =
      "translate(" +
      (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
      "%)";
    setTimeout(function () {
      slider.style.transition = "transform 1s";
    });
  }

  if (window.innerWidth > 1000) {
    // console.log("innerwidth larger than 1000px");
    slider.style.transition = "none";
    offsetBelow1000px = 0;
    slider.style.transform =
      "translate(" +
      (-offsetBelow1000px + -offset * (activeSectionIndex - 1)) +
      "%)";
    setTimeout(function () {
      slider.style.transition = "transform 1s";
    });
  }
}

// SETUP ON PAGE LOAD SECTION 4

function changesOnLoadS4() {
  //   console.log("slider rect right: " + sliderS4.getBoundingClientRect().right);
  itemWidth =
    Number.parseInt(window.getComputedStyle(sliderS4Item).marginRight) +
    Number.parseInt(window.getComputedStyle(sliderS4Item).width);
  // console.log("item width: " + itemWidth);
}

// SETUP ON RESIZE SECTION 4

function changesOnResizeS4() {
  sliderS4Item.addEventListener("transitionend", checkItemWidth);

  function checkItemWidth() {
    itemWidth =
      Number.parseInt(window.getComputedStyle(sliderS4Item).marginRight) +
      Number.parseInt(window.getComputedStyle(sliderS4Item).width);
    // console.log("item width: " + itemWidth);
    sliderS4Item.removeEventListener("transitionend", checkItemWidth);
  }
}
