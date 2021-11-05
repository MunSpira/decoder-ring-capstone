// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    let inputLower = input.toLowerCase();
    let inputArray = inputLower.split("");
    let alphabetArray = alphabet.split("");
    let outputArray = [];

    let repeat = alphabetArray.filter(
      (char, index) => alphabet.indexOf(char) !== index
    );
    if (repeat.length > 0) {
      return false;
    }

    if (encode) {
      let encodes = inputArray.map((char) => {
        if (char === " ") {
          return outputArray.push(char);
        }

        let match = alpha.map((letter) => {
          if (char === letter) {
            return outputArray.push(alphabetArray[alpha.indexOf(letter)]);
          }
        });
      });
    }

    if (!encode) {
      let decodes = inputArray.map((char) => {
        if (char === " ") {
          return outputArray.push(char);
        }

        let match = alphabetArray.map((letter) => {
          if (char === letter) {
            return outputArray.push(alpha[alphabetArray.indexOf(letter)]);
          }
        });
      });
    }
    return outputArray.join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
