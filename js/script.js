const lettersGuessed = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

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
    const guess = textInput.value;
    console.log(guess);
    textInput.value = "";
  });
  const value = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0){
    } else if (input.length > 1);{
    } else if (input.match(acceptedLetter)){
    } else {
        return input;
    }
  };