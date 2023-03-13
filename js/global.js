/// INITIALIZATION ///
console.log("global.js initialized 🌍");

//// colors ////
const primaryColor = "var(--primary-color)";
const secondaryColor = "var(--secondary-color)";
const accentColor = "var(--accent-color)";

/// bookmarks ///
const bookmark = document.querySelector('[data-js="bookmark"]');
const card = document.querySelector('[data-js="card"]');

// change bookmark color on click
function changeBookmarkColorOnClick(fillColor, strokeColor) {
  const bookmarkSVGs = document.querySelectorAll(".bookmark:first-child");
  bookmarkSVGs.forEach((bookmarkSVG) => {
    bookmarkSVG.addEventListener("mousedown", () => {
      bookmarkSVG.style.fill = fillColor;
      bookmarkSVG.style.stroke = strokeColor;
    });
    bookmarkSVG.addEventListener("mouseup", () => {
      bookmarkSVG.style.fill = "";
      bookmarkSVG.style.stroke = "";
    });
  });
}

// set bookmark styles according to state
function toggleBookmarkStyle() {
  // define SVG colors on mousedown
  changeBookmarkColorOnClick(secondaryColor, accentColor);
  const bookmarkActive = bookmark.classList.contains("bookmark--active");
  const removeBorder = () => card.classList.remove("card--active");
  const addBorder = () => card.classList.add("card--active");
  // check bookmark state, then change title & border
  if (!bookmarkActive) {
    bookmark.setAttribute("title", "Add bookmark");
    removeBorder();
  } else {
    bookmark.setAttribute("title", "Remove bookmark");
    addBorder();
  }
}

// set bookmark state
function toggleBookmarkState() {
  bookmark.classList.toggle("bookmark--active");
  toggleBookmarkStyle();
}

// toggle bookmark style & state
function initializeBookmark() {
  toggleBookmarkStyle();
  bookmark.addEventListener("click", () => {
    toggleBookmarkState();
  });
}

/// buttons ///
// change button color on click
function changeButtonColorOnClick(backgroundColor, textColor) {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("mousedown", () => {
      button.style.backgroundColor = backgroundColor;
      button.style.color = textColor;
    });
    button.addEventListener("mouseup", () => {
      button.style.backgroundColor = "";
      button.style.color = "";
    });
  });
}

/// nav links ///
// change nav link color on click
function changeNavLinkColorOnClick(backgroundColor, textColor) {
  const navLinks = document.querySelectorAll(".nav-menu__link");
  navLinks.forEach((link) => {
    link.addEventListener("mousedown", () => {
      link.style.backgroundColor = backgroundColor;
      link.style.color = textColor;
    });
    link.addEventListener("mouseup", () => {
      link.style.backgroundColor = "";
      link.style.color = "";
    });
  });
}

/// EXPORTS ///
// functions
export {
  initializeBookmark,
  changeButtonColorOnClick,
  changeNavLinkColorOnClick,
};
// variables
export { primaryColor, secondaryColor, accentColor };
