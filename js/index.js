console.log("It will be ok");

/// bookmarks ///
const bookmark = document.querySelector('[data-js="bookmark"]');
const card = document.querySelector('[data-js="card"]');

// set bookmark title & border according to state
function toggleBookmarkStyle() {
  const isBookmarked = bookmark.classList.contains("bookmark--active");
  const removeBorder = () => card.classList.remove("card--active");
  const addBorder = () => card.classList.add("card--active");
  if (!isBookmarked) {
    bookmark.setAttribute("title", "Add bookmark");
    removeBorder();
  } else {
    bookmark.setAttribute("title", "Remove bookmark");
    addBorder();
  }
}

toggleBookmarkStyle();

// change bookmark color on click

const bookmarkSVGs = document.querySelectorAll(".bookmark:first-child");

function changeBookmarkColorOnClick(fillColor, strokeColor) {
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
changeBookmarkColorOnClick("#1e0141", "yellow");

// set bookmark state
function toggleBookmark() {
  bookmark.classList.toggle("bookmark--active");
  toggleBookmarkStyle();
}

bookmark.addEventListener("click", () => {
  toggleBookmark();
});

/// buttons ///
const buttons = document.querySelectorAll(".button");

// change button color on click

function changeButtonColorOnClick(backgroundColor, textColor) {
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
changeButtonColorOnClick("#1e0141", "#f1f1d1");

// toggle answer display
const answerButton = document.querySelector('[data-js="show-answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

function toggleAnswer() {
  answer.classList.toggle("hidden");
  if (answerButton.textContent === "Hide answer") {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "Hide answer";
  }
}
answerButton.addEventListener("click", () => {
  toggleAnswer();
});

/// nav links ///
const navLinks = document.querySelectorAll(".nav-menu__link");

// change nav link color on click
function changeNavLinkColorOnClick(backgroundColor, textColor) {
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
changeNavLinkColorOnClick("#1e0141", "#f1f1d1");
