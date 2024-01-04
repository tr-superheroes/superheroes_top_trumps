import fetch from "cross-fetch";
import { Card } from "../types/cards.types";
import { NULLSTRING, URL } from "../helpers/constants";

const formatCard = (card: any): Card => {
  return {
    id: card.id,
    name: card.name,
    image: card.image.url,
    powerstats: card.powerstats,
  };
};

export const fetchCard = async (apiEndPoint: string): Promise<Card> => {
  const response = await fetch(apiEndPoint);
  const card = await response.json();
  return formatCard(card);
};
export async function generateCards(
  numberOfCards: number
): Promise<Array<Card>> {
  const cards: Card[] = [];
  while (cards.length < numberOfCards) {
    const randomCardId = generateRandomID();
    if (!isPresentInDeck(randomCardId, cards)) {
      const urlByID = `${URL}/${randomCardId}`;
      console.log("URL", urlByID);

      const card: Card = await fetchCard(urlByID);
      if (
        card.powerstats.combat !== NULLSTRING &&
        card.powerstats.durability !== NULLSTRING &&
        card.powerstats.intelligence !== NULLSTRING &&
        card.powerstats.power !== NULLSTRING &&
        card.powerstats.speed !== NULLSTRING &&
        card.powerstats.strength !== NULLSTRING
      ) {
        cards.push(card);
      }
    }
  }
  console.log(cards);
  return cards;
}

export const generateRandomID = (): number =>
  Math.floor(Math.random() * 731) + 1;

export const isPresentInDeck = (randomId: number, cards: Card[]): boolean => {
  let idArray = cards.map((card) => card.id);
  return idArray.some((id) => id === randomId);
};
