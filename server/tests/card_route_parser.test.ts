import { getRandomNumberFromQueryString } from "../helpers/card_route_parser";
import { GetRandomNumberResults } from "../helpers/card_route_parser";
describe("test getRandomNumberFromQueryString function", () => {
  it("should return the value assigned to random in the query string", () => {
    const sampleQuery = { random: "4" };
    const returnValue: GetRandomNumberResults =
      getRandomNumberFromQueryString(sampleQuery);

    expect(returnValue._t).toEqual("success");
    if (returnValue._t === "success") expect(returnValue.num).toEqual(4);
  });
  it("should return the default number of cards if random is not present in the query string", () => {
    const sampleQuery = {};
    const returnValue: GetRandomNumberResults =
      getRandomNumberFromQueryString(sampleQuery);

    expect(returnValue._t).toEqual("success");
    if (returnValue._t === "success") expect(returnValue.num).toEqual(14);
  });
  it("should return the NaN if random is not a number", () => {
    const sampleQuery = { random: "q" };
    const returnValue: GetRandomNumberResults =
      getRandomNumberFromQueryString(sampleQuery);

    expect(returnValue._t).toEqual("NaN");
  });
  it("should return invalid if invalid query string is passed", () => {
    const sampleQuery = { xyz: "q" };
    const returnValue: GetRandomNumberResults =
      getRandomNumberFromQueryString(sampleQuery);

    expect(returnValue._t).toEqual("invalid");
  });
});
