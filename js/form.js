console.log("Form initialized 😎");

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
changeButtonColorOnClick("#1e0141", "white");

/* form */
const form = document.querySelector('[data-js="form"]');

// live input: display max length
const inputQuestion = document.querySelector('[data-js="input-question"');
const inputAnswer = document.querySelector('[data-js="input-answer"');
const inputTag = document.querySelector('[data-js="input-tag"');

const charsLeftQuestion = document.querySelector(
  '[data-js="chars-left-question"]'
);
const charsLeftAnswer = document.querySelector('[data-js="chars-left-answer"]');
const charsLeftTag = document.querySelector('[data-js="chars-left-tag"]');

const maxLengthQuestion = inputQuestion.getAttribute("maxlength");
const maxLengthAnswer = inputQuestion.getAttribute("maxlength");
const maxLengthTag = inputQuestion.getAttribute("maxlength");

function calculateCharsLeft(event, charsLeftDisplay, maxLength) {
  charsLeftDisplay.classList.add("chars-left--fade-in");
  const inputLength = event.target.value.length;
  let charsLeft = maxLength - inputLength;
  charsLeftDisplay.textContent = `${charsLeft} characters left`;

  charsLeft === 0
    ? charsLeftDisplay.classList.add("chars-left--no-chars-left")
    : null;

  charsLeft > 0
    ? (charsLeftDisplay.classList.remove("chars-left--no-chars-left"),
      charsLeftDisplay.classList.remove("chars-left--fade-out"),
      charsLeftDisplay.classList.add("chars-left--fade-in"))
    : null;

  charsLeft === maxLength
    ? charsLeftDisplay.classList.add("chars-left--fade-out")
    : null;
}

inputQuestion.addEventListener("input", (event) => {
  calculateCharsLeft(event, charsLeftQuestion, +maxLengthQuestion);
});
inputAnswer.addEventListener("input", (event) => {
  calculateCharsLeft(event, charsLeftAnswer, +maxLengthAnswer);
});
inputTag.addEventListener("input", (event) => {
  calculateCharsLeft(event, charsLeftTag, +maxLengthTag);
});

// live input: tag, lowercase
inputTag.addEventListener("input", () => {
  const inputValue = inputTag.value;
  inputTag.value = inputValue.toLowerCase();
});

// create new card
function createCard(data) {
  const cards = document.querySelector('[data-js="cards"]');
  const card = document.createElement("article");
  card.classList.add("card");
  card.setAttribute("data-js", "card");
  cards.append(card);

  const tags = document.createElement("div");
  tags.classList.add("card__tags");
  card.append(tags);

  const tag = document.createElement("span");
  tag.classList.add("card__tag");
  tag.textContent = `#${data.tag}`;
  tags.append(tag);

  const content = document.createElement("div");
  content.classList.add("card__content");
  card.append(content);

  /* makes SVG icon invisible
  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.setAttribute("aria-label", "bookmark");
  bookmarkButton.setAttribute("type", "button");
  bookmarkButton.setAttribute("title", "Add bookmark");
  content.append(bookmarkButton);

  const bookmarkSVG = document.createElement("svg");
  bookmarkSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  bookmarkSVG.setAttribute("viewBox", "0 0 24 24");
  bookmarkButton.append(bookmarkSVG);

  const SVGPath1 = document.createElement("path");
  SVGPath1.setAttribute("stroke", "none");
  SVGPath1.setAttribute("d", "M0 0h24v24H0z");
  SVGPath1.setAttribute("fill", "none");
  bookmarkSVG.append(SVGPath1);

  const SVGPath2 = document.createElement("path");
  SVGPath2.setAttribute(
    "d",
    "M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"
  );
  bookmarkSVG.append(SVGPath2);
  */

  content.innerHTML += `
    <button
      class="bookmark"
      aria-label="bookmark"
      type="button"
      data-js="bookmark"
    >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"
      />
    </svg>
    </button>
  `;

  const question = document.createElement("h2");
  question.classList.add("card__question");
  question.textContent = data.question;
  content.append(question);

  const showAnswerButton = document.createElement("button");
  showAnswerButton.classList.add("button");
  showAnswerButton.setAttribute("data-js", "show-answer-button");
  showAnswerButton.textContent = "Show Answer";
  content.append(showAnswerButton);

  const answer = document.createElement("p");
  answer.classList.add("card__answer", "hidden");
  answer.setAttribute("data-js", "answer");
  answer.textContent = data.answer;
  content.append(answer);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log(data);

  createCard(data);
});
