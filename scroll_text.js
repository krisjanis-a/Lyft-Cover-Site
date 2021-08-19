const scrollingText = document.querySelector(
  "#s6__scroll-heading__moving-slider"
);

let positionText = 0;

scrolling();

function scrolling() {
  // console.log("scroll func");

  setInterval(function () {
    if (positionText === 5) {
      scrollingText.style.transform =
        "translateY(-" + 3 * positionText + "rem)";

      scrollingText.addEventListener("transitionend", resetPosition);

      positionText = 1;
      return;
    }

    scrollingText.style.transform = "translateY(-" + 3 * positionText + "rem)";
    positionText++;
  }, 1500);
}

function resetPosition() {
  scrollingText.style.transition = "none";
  scrollingText.style.transform = "translateY(0rem)";

  setTimeout(function () {
    scrollingText.style.transition = "transform 0.5s";
  });

  scrollingText.removeEventListener("transitionend", resetPosition);
}
