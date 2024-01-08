import fetch from "cross-fetch";
import { Card } from "../types/cards.types";
import { NULLSTRING, URL } from "../helpers/constants";
import { DEFAULT_NUMBER_OF_CARDS } from "../helpers/constants";

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
  return cards;
}

export async function generateMockCards(): Promise<Array<Card>> {
  const cards: Card[] = [
    {
      id: 689,
      name: "Venom III",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/1042.jpg",
      powerstats: {
        intelligence: "63",
        strength: "73",
        speed: "35",
        durability: "90",
        power: "73",
        combat: "56",
      },
    },
    {
      id: 53,
      name: "Atom II",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/938.jpg",
      powerstats: {
        intelligence: "88",
        strength: "10",
        speed: "33",
        durability: "45",
        power: "40",
        combat: "60",
      },
    },
    {
      id: 43,
      name: "Ares",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/1118.jpg",
      powerstats: {
        intelligence: "75",
        strength: "82",
        speed: "35",
        durability: "80",
        power: "84",
        combat: "101",
      },
    },
    {
      id: 545,
      name: "Red Arrow",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/1013.jpg",
      powerstats: {
        intelligence: "63",
        strength: "16",
        speed: "25",
        durability: "20",
        power: "23",
        combat: "80",
      },
    },
    {
      id: 728,
      name: "Ymir",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/179.jpg",
      powerstats: {
        intelligence: "50",
        strength: "100",
        speed: "27",
        durability: "100",
        power: "98",
        combat: "28",
      },
    },
    {
      id: 577,
      name: "Scarlet Spider",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/174.jpg",
      powerstats: {
        intelligence: "75",
        strength: "53",
        speed: "60",
        durability: "74",
        power: "46",
        combat: "56",
      },
    },
    {
      id: 389,
      name: "King Kong",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/10591.jpg",
      powerstats: {
        intelligence: "56",
        strength: "100",
        speed: "71",
        durability: "75",
        power: "47",
        combat: "75",
      },
    },
    {
      id: 730,
      name: "Zatanna",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/809.jpg",
      powerstats: {
        intelligence: "81",
        strength: "10",
        speed: "23",
        durability: "28",
        power: "100",
        combat: "56",
      },
    },
    {
      id: 231,
      name: "Doppelganger",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/1320.jpg",
      powerstats: {
        intelligence: "8",
        strength: "63",
        speed: "60",
        durability: "95",
        power: "69",
        combat: "84",
      },
    },
    {
      id: 375,
      name: "Junkpile",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/10002.jpg",
      powerstats: {
        intelligence: "50",
        strength: "38",
        speed: "17",
        durability: "90",
        power: "81",
        combat: "30",
      },
    },
    {
      id: 475,
      name: "Mr Immortal",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/10794.jpg",
      powerstats: {
        intelligence: "50",
        strength: "10",
        speed: "8",
        durability: "100",
        power: "69",
        combat: "30",
      },
    },
    {
      id: 476,
      name: "Mr Incredible",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/869.jpg",
      powerstats: {
        intelligence: "50",
        strength: "83",
        speed: "33",
        durability: "95",
        power: "29",
        combat: "40",
      },
    },
    {
      id: 84,
      name: "Bill Harken",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/1527.jpg",
      powerstats: {
        intelligence: "63",
        strength: "36",
        speed: "33",
        durability: "60",
        power: "27",
        combat: "40",
      },
    },
    {
      id: 387,
      name: "Killer Frost",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/10508.jpg",
      powerstats: {
        intelligence: "88",
        strength: "10",
        speed: "13",
        durability: "35",
        power: "59",
        combat: "30",
      },
    },
  ];
  return cards;
}

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

export const generateRandomID = (): number =>
  Math.floor(Math.random() * 731) + 1;

export const isPresentInDeck = (randomId: number, cards: Card[]): boolean => {
  let idArray = cards.map((card) => card.id);
  return idArray.some((id) => id === randomId);
};
