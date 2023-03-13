/// IMPORTS ///
// global functions
import {
  initializeBookmark,
  changeButtonColorOnClick,
  changeNavLinkColorOnClick,
} from "./global.js";
// global variables
import { primaryColor, secondaryColor, accentColor } from "./global.js";

/// INITIALIZATION ///
console.log("index.js initialized 🏠");
initializeBookmark();
changeButtonColorOnClick(secondaryColor, primaryColor);
changeNavLinkColorOnClick(secondaryColor, primaryColor);

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
