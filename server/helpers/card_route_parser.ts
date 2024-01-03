import { DEFAULT_NUMBER_OF_CARDS } from "./constants";

export const getRandomNumberFromQueryString = (query: any): number => {
  if (query.random) return Number.parseInt(query.random);
  else if (Object.keys(query).length === 0) return DEFAULT_NUMBER_OF_CARDS;
  else return NaN;
};
