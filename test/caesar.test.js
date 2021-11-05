// Write your tests here!
// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
  it("should return an encoded word with shift 3", () => {
    const expected = "wklqnixo";
    const actual = caesar.caesar("thinkful", 3);
    expect(actual).to.equal(expected);
  });

  it("should return an encoded word with shift -3", () => {
    const expected = "qefkhcri";
    const actual = caesar.caesar("thinkful", -3);
    expect(actual).to.equal(expected);
  });

  it("should return a decoded word with shift 3", () => {
    const expected = "thinkful";
    const actual = caesar.caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });

  it("should return an encoded message with shift 8", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar.caesar("This is a secret message!", 8);
    expect(actual).to.equal(expected);
  });

  it("should return a decoded message with shift 8", () => {
    const expected = "this is a secret message!";
    const actual = caesar.caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  });

  it("should return false with no shift value", () => {
    const expected = false;
    const actual = caesar.caesar("thinkful");
    expect(actual).to.equal(expected);
  });

  it("should return false when shift is more than 25", () => {
    const expected = false;
    const actual = caesar.caesar("thinkful", 99);
    expect(actual).to.equal(expected);
  });

  it("should return false when shift is less than -25", () => {
    const expected = false;
    const actual = caesar.caesar("thinkful", -26);
    expect(actual).to.equal(expected);
  });
});
