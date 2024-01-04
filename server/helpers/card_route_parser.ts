import { type } from "os";
import { DEFAULT_NUMBER_OF_CARDS } from "./constants";
export type GetRandomNumberQueryStringInvalid = { _t: "invalid" };
export type GetRandomNumberQueryStringSuccess = { _t: "success"; num: number };
export type GetRandomNumberQueryStringValueNaN = { _t: "NaN" };
export type GetRandomNumberResults =
  | GetRandomNumberQueryStringInvalid
  | GetRandomNumberQueryStringSuccess
  | GetRandomNumberQueryStringValueNaN;

export const getRandomNumberFromQueryString = (
  query: any
): GetRandomNumberResults => {
  let num = DEFAULT_NUMBER_OF_CARDS;
  if (query.random) {
    num = Number.parseInt(query.random);
    if (Number.isNaN(num)) {
      return { _t: "NaN" };
    }

    return { _t: "success", num };
  } else if (Object.keys(query).length === 0) return { _t: "success", num };
  else return { _t: "invalid" };
};
