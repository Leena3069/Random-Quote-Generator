const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  btnEl.innerText = "loding...";
  btnEl.disabled = true;
  quoteEl.innerText = "updating...";
  authorEl.innerText = "Updating...";

  const response = await fetch(apiURL);
  const data = await response.json();
  const quoteContent = data.content;
  const quoteAuthor = data.author;

  quoteEl.innerText = quoteContent;
  authorEl.innerText = "~" + quoteAuthor;

  btnEl.innerText = "Get a quote";
  btnEl.disabled = false;

  console.log(data);
}

// getQuote();
btnEl.addEventListener("click", getQuote);
