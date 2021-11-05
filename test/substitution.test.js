// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
  it("should return encoded word", () => {
    const expected = "jrufscpw";
    const actual = substitution.substitution(
      "thinkful",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(actual).to.equal(expected);
  });

  it("should return encoded phrase with spaces", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution.substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(actual).to.equal(expected);
  });

  it("should return decoded word", () => {
    const expected = "thinkful";
    const actual = substitution.substitution(
      "jrufscpw",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    expect(actual).to.equal(expected);
  });

  it("should return encoded word when alphabet has special characters", () => {
    const expected = "y&ii$r&";
    const actual = substitution.substitution(
      "message",
      "$wae&zrdxtfcygvuhbijnokmpl"
    );
    expect(actual).to.equal(expected);
  });

  it("should return decoded word when alphabet has special characters", () => {
    const expected = "message";
    const actual = substitution.substitution(
      "y&ii$r&",
      "$wae&zrdxtfcygvuhbijnokmpl",
      false
    );
    expect(actual).to.equal(expected);
  });

  it("should return false if alphabet does not have 26 characters", () => {
    const expected = false;
    const actual = substitution.substitution("thinkful", "short");
    expect(actual).to.equal(expected);
  });

  it("should return false if characters in alphabet are not unique", () => {
    const expected = false;
    const actual = substitution.substitution(
      "thinkful",
      "abcabcabcabcabcabcabcabcyz"
    );
    expect(actual).to.equal(expected);
  });
});
