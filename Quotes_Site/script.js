const quotes = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("newQ");
const tweet = document.getElementById("tweet");

let parsed_data = "";
let quoteData = "";

const newQuotes = () => {
  let num = Math.floor(Math.random() * 1600);
  quoteData = parsed_data[num];

  quotes.innerText = `${quoteData.text}`;
  quoteData.author === null
    ? (author.innerText = "unKnown")
    : (author.innerText = `${quoteData.author}`);
};

const getData = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let fetch_data = await fetch(api);
    parsed_data = await fetch_data.json();
    newQuotes();
  } catch (error) {}
};

btn.addEventListener("click", newQuotes);

tweet.addEventListener("click", () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quoteData.text}`;
  window.open(tweetPost);
});

getData();
