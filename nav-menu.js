const toggleNavMenuButton = document.querySelector(".toggleNavMenuButton");
const barsIcon = document.querySelector(".fa-bars");
const timesIcon = document.querySelector(".fa-times");
const header = document.querySelector("header");
const navMenuMobile = document.querySelector(".nav__list.mobile");
const navMenuDesktop = document.querySelector(".nav__list.desktop");

let menuActive = false;

toggleNavMenuButton.addEventListener("click", () => {
  if (menuActive) {
    toggleInactive();
    return;
  }

  if (!menuActive) {
    toggleActive();
    return;
  }
});

navMenuMobile.addEventListener("click", () => {
  toggleInactive();
  return;
});

function toggleInactive() {
  barsIcon.classList.add("active");
  timesIcon.classList.remove("active");
  navMenuMobile.style.right = "-100%";
  navMenuMobile.style.opacity = "0";
  menuActive = !menuActive;
  return;
}

function toggleActive() {
  barsIcon.classList.remove("active");
  timesIcon.classList.add("active");
  navMenuMobile.style.right = "0";
  navMenuMobile.style.opacity = "1";
  menuActive = !menuActive;
  return;
}
