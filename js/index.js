let openSubmenu = false;

const mobileMenu = document.querySelector(".mobile-menu");
const mainNav = document.querySelector(".main-nav");
const openSubMenuEl = document.querySelector("#openSubMenu");
const subMenuListItemsEl = document.querySelector("#subMenuListItems");
const faCaretEl = document.querySelector("#faCaret");
//functions
const handleMobilMenu = () => {
  mobileMenu.classList.toggle("open");
  mainNav.classList.toggle("open-nav");
};
const OpenSubMenuFun = (e) => {
  subMenuListItemsEl.classList.toggle("open-submenu");
  openSubmenu = !openSubmenu;
  if (openSubmenu) {
    faCaretEl.classList.remove("fa-caret-down");
    faCaretEl.classList.add("fa-caret-up");
  } else {
    faCaretEl.classList.remove("fa-caret-up");
    faCaretEl.classList.add("fa-caret-down");
  }
};
// addEventListener

mobileMenu.addEventListener("click", handleMobilMenu);
openSubMenuEl.addEventListener("click", OpenSubMenuFun);
