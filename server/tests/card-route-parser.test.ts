import { getRandomNumberFromQueryString } from "../helpers/card-route-parser";

describe("test getRandomNumberFromQueryString function", () => {
  it("should return the value assigned to random in the query string", () => {
    const sampleQuery = { random: "4" };
    expect(getRandomNumberFromQueryString(sampleQuery)).toEqual(4);
  });
  it("should return the default number of cards if random is not present in the query string", () => {
    const sampleQuery = {};
    expect(getRandomNumberFromQueryString(sampleQuery)).toEqual(14);
  });
  it("should return the NaN if random is not a number", () => {
    const sampleQuery = { random: "q" };
    expect(getRandomNumberFromQueryString(sampleQuery)).toBeNaN;
  });
});
