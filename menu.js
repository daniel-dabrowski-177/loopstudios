const menu = document.querySelector(".menu").lastElementChild;
const navUl = document.querySelector(".nav-ul");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  navUl.classList.toggle("active");
  if (
    menu.lastElementChild.attributes[0].textContent ==
    "/images/icon-hamburger.svg"
  ) {
    menu.lastElementChild.attributes[0].textContent = "images/icon-close.svg";
  } else {
    menu.lastElementChild.attributes[0].textContent =
      "/images/icon-hamburger.svg";
  }

  // Prevent scrolling if mobile-open
  if (menu.classList[1] == "mobile-open") {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "scroll";
  }
});
