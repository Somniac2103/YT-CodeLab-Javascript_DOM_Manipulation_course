//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
  quote: '“Be yourself; everyone else is already taken.”',
  person: ' Oscar Wilde'
},{
  quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
  person: ' Albert Einstein'
},{
  quote: '“So many books, so little time.”',
  person: ' Frank Zappa'
},{
  quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
  person: ' Bernard M. Baruch'
}];

btn.addEventListener('click', function(){

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});


