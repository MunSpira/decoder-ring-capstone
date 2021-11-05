// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius.js");

describe("polybius", () => {
  it("should return encoded word using polybius code", () => {
    const expected = "4432423352125413";
    const actual = polybius.polybius("thinkful");
    expect(actual).to.equal(expected);
  });

  it("should return encoded word with spaces using polybius code", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius.polybius("Hello world");
    expect(actual).to.equal(expected);
  });

  it("should return decoded word with space", () => {
    const expected = "hello world";
    const actual = polybius.polybius("3251131343 2543241341", false);
    expect(actual).to.equal(expected);
  });

  it("should return decoded word with i/j option for code 42", () => {
    const expected = "th(i/j)nkful";
    const actual = polybius.polybius("4432423352125413", false);
    expect(actual).to.equal(expected);
  });

  it("should return false with odd number of polybius code", () => {
    const expected = false;
    const actual = polybius.polybius("44324233521254134", false);
    expect(actual).to.equal(expected);
  });
});
