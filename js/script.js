
// array to hold quote objects
let quotes = [
  {
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    source: "Oscar Wilde"
  },
  {
    quote: "It is never too late to be what you might have been.",
    source: "George Eliot",
    citation: "Whatever",
    year: 1950
  },
  {
    quote: "To be yourself in a world that is constantly " + 
    "trying to make you something else is the greatest accomplishment.",
    source: "Ralph Waldo Emerson"
  },
  {
    quote: "All the world's a stage, and all the men and women merely players.",
    source: "William Shakespeare"
  },
  {
    quote: "Don't let your happiness depend on something you may lose.",
    source: "C.S. Lewis"
  },
  {
    quote: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
    source: "Stephen King"
  }
];


function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * quotes.length );
  console.log(randomNumber);
  return quotes[randomNumber];
}


function printQuote() {
  let randomQuote = getRandomQuote()
  let htmlString = '';
  if (randomQuote.citation != null && randomQuote.year != null) {
    htmlString = `
    <p class="quote"> ${randomQuote.quote} </p>
    <p class="source"> ${randomQuote.source}
      <span class="citation"> ${randomQuote.citation} </span>
      <span class="year"> ${randomQuote.year} </span>
    </p>
  `;
  } else {
    htmlString = `
    <p class="quote"> ${randomQuote.quote} </p>
    <p class="source"> ${randomQuote.source} </p>
  `;
  }
  
  console.log(randomQuote);
  document.getElementById('quote-box').innerHTML = htmlString;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);