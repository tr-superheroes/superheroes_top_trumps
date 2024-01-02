import { DEFAULT_NUMBER_OF_CARDS } from "./constants";

export const getRandomNumberFromQueryString = (query: any): number =>
  query.random ? Number.parseInt(query.random) : DEFAULT_NUMBER_OF_CARDS;
