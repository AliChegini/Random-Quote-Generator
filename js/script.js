/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

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
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
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

//console.log(getRandomQuote());


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  let randomQuote = getRandomQuote()
  let htmlString = "";
  

}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.

//console.log(getRandomQuote(quotes));