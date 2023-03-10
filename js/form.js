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

// form
const form = document.querySelector('[data-js="form"]');

/*
          <div class="card__tags">
            <span class="card__tag"
              >#<abbr title="Hyper Text Markup Language">HTML</abbr></span
            >
            <span class="card__tag"
              >#<abbr title="Cascading Style Sheet">CSS</abbr></span
            >
            <span class="card__tag">#Flexbox</span>
          </div>
          <div class="card__content">
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
            <h2 class="card__question">
              What property flips the axes in flexbox?
            </h2>
            <button class="button" data-js="show-answer-button">
              Show Answer
            </button>
            <p class="card__answer hidden" data-js="answer">
              Damned if I know.
            </p>
          </div>
*/

function createCard(data) {
  const main = document.querySelector("main");
  const card = document.createElement("article");
  card.classList.add("card");
  card.setAttribute("data-js", "card");
  main.append(card);

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
