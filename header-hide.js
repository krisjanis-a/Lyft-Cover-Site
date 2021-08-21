const doc = document.documentElement;

let currentScroll = (prevScroll = window.scrollY || doc.scrollTop);
let currentDirection = (prevDirection = 0);
let treshold = 100;
let toggled;

function checkScroll() {
  currentScroll = window.scrollY || doc.scrollTop;
  if (currentScroll > prevScroll) {
    // scrolled down
    currentDirection = 2;
  } else {
    //scrolled up
    currentDirection = 1;
  }

  if (currentDirection !== prevDirection) {
    toggled = toggleHeader();
  }

  if (toggled) {
    prevDirection = currentDirection;
  }
  prevScroll = currentScroll;
}

function toggleHeader() {
  toggled = true;
  if (currentDirection === 2 && currentScroll > treshold) {
    header.classList.add("hide");
    toggleInactive();
  } else if (currentDirection === 1) {
    header.classList.remove("hide");
  } else {
    toggled = false;
  }
  return toggled;
}

window.addEventListener("scroll", checkScroll);
