console.clear();
console.log("It will be ok");

// toggle bookmark
const bookmark = document.querySelector('[data-js="bookmark"]');

function toggleBookmark() {
  bookmark.classList.toggle("bookmark--marked");
}

bookmark.addEventListener("click", () => {
  toggleBookmark();
});

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

// form
const form = document.querySelector('[data-js="form"]');
