const lettersGuessed = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
const placeholdersLetters = [];
for (const letter of word) {
    console.log(letter);
    placeholdersLetters.push("●");
}
wordInProgress.innerText = placeholdersLetters.join("");
};

placeholder(word);

button.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = ""; 
    const guess = textInput.value;
    const goodGuess = value(guess);
    if (goodGuess)  {
        makeGuess(guess);
    }
    textInput.value = "";
  });
  const value = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0){
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    }
  };
  const makeGuess = function (guess){
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter. Try again!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
  };