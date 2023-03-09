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
const answer = 