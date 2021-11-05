const caesarModule = (function () {
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

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) return false;
    if (!encode) shift *= -1;
    input = input.toLowerCase();

    let newLetter;
    let newIndex;
    let newWord;
    let output = [];

    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < alpha.length; j++) {
        if (input[i] === alpha[j]) {
          newIndex = alpha.indexOf(alpha[j]) + shift;
          newLetter = alpha[newIndex];
          output.push(newLetter);
          if (newIndex > 25) {
            newIndex = newIndex - 26;
            newLetter = alpha[newIndex];
            output.push(newLetter);
          } else {
            newIndex = newIndex + 26;
            newLetter = alpha[newIndex];
            output.push(newLetter);
          }
        }
      }
      if (!alpha.includes(input[i])) {
        newLetter = input[i];
        output.push(newLetter);
      }
    }
    newWord = output.join("");
    console.log(newWord);
    return newWord;
  }
  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
