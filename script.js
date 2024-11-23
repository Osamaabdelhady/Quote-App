var quotes = [
    ' "Be yourself; everyone else is already taken." ',
    ' "Two things are infinite: the universe and human stupidity; and I"m not sure about the universe." ',
    ' "A room without books is like a body without a soul." ',
    ' "You only live once, but if you do it right, once is enough." ',
    ' "The best revenge is massive success." ',
    ' "Be the change that you wish to see in the world." ',
    ' "A friend is someone who knows all about you and still loves you" '
];

var names = [
    "--Oscar Wilde ",
    "--Albert Einstein",
    "--Marcus Tullius Cicero ",
    "--Mae West ",
    "--Frank Sinatra",
    "--Mahatma Gandhi",
    "--Elbert Hubbard "
];


var index = 0;

function outputQuote() {
    document.getElementById('quote').innerText = quotes[index];
    document.getElementById('author').innerText = names[index];
    index = (index + 1) % quotes.length;   
    index = (index + 1) % names.length;
}