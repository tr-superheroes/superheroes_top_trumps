import fetch from "cross-fetch";
import { Card, URL } from "../types/cards.types";
const cards: Card[] = [];

const fetchData = async (apiEndPoint: string) => {
  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    cards.push(json);
  } catch (error) {
    console.log(error);
  }
};
export async function generateCards(number: number): Promise<Array<Card>> {
  let amount = number ?? 14;

  console.log("URL", URL);
  await fetchData(URL);
  console.log("cards", cards);
  return cards;
}

function rand(x: number): number {
  return Math.random() * x;
}
