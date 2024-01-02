import fetch from "cross-fetch";
import { Card } from "../types/cards.types";
import { URL } from "../helpers/constants";
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
export async function generateCards(
  numberOfCards: number
): Promise<Array<Card>> {
  console.log("number", numberOfCards);

  const arrayOfNRandomIDs = generateNRandomIDs(numberOfCards);
  console.log("array of ids", arrayOfNRandomIDs);
  const urlByID = `${URL}/${arrayOfNRandomIDs[0]}`;
  console.log("URL", urlByID);
  await fetchData(urlByID);
  console.log("cards", cards);
  return cards;
}

const generateNRandomIDs = (n: number): number[] => {
  const arrayOfIDs: number[] = [];
  while (arrayOfIDs.length < n) {
    let randomNum: number = Math.floor(Math.random() * 731) + 1;
    if (arrayOfIDs.indexOf(randomNum) === -1) arrayOfIDs.push(randomNum);
  }
  return arrayOfIDs;
};
