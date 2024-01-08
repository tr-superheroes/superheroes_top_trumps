import {
  generateRandomID,
  isPresentInDeck,
  generateCards,
  fetchCard,
  generateMockCards,
} from "../services/generate_superhero_cards";
import { Card } from "../types/cards.types";
import { URL } from "../helpers/constants";

describe("test generateRandomID function", () => {
  it("should return a number between 1 and 731", () => {
    expect(generateRandomID()).toBeLessThanOrEqual(731);
    expect(generateRandomID()).toBeGreaterThanOrEqual(1);
  });
});

describe("test isPresentInDeck function", () => {
  it("should return true if the id is pesent in the deck of cards", () => {
    const sampleCardsDeck: Card[] = [
      {
        id: 429,
        name: "Man-Wolf",
        image: "https://www.superherodb.com/pictures2/portraits/10/100/91.jpg",
        powerstats: {
          intelligence: "63",
          strength: "44",
          speed: "35",
          durability: "42",
          power: "45",
          combat: "70",
        },
      },
      {
        id: 474,
        name: "Moses Magnum",
        image:
          "https://www.superherodb.com/pictures2/portraits/10/100/1020.jpg",
        powerstats: {
          intelligence: "75",
          strength: "28",
          speed: "12",
          durability: "42",
          power: "55",
          combat: "56",
        },
      },
      {
        id: 162,
        name: "Carnage",
        image: "https://www.superherodb.com/pictures2/portraits/10/100/187.jpg",
        powerstats: {
          intelligence: "63",
          strength: "63",
          speed: "70",
          durability: "84",
          power: "88",
          combat: "90",
        },
      },
      {
        id: 226,
        name: "Doctor Strange",
        image: "https://www.superherodb.com/pictures2/portraits/10/100/55.jpg",
        powerstats: {
          intelligence: "100",
          strength: "10",
          speed: "12",
          durability: "84",
          power: "100",
          combat: "60",
        },
      },
      {
        id: 584,
        name: "Shadow King",
        image: "https://www.superherodb.com/pictures2/portraits/10/100/121.jpg",
        powerstats: {
          intelligence: "75",
          strength: "12",
          speed: "27",
          durability: "100",
          power: "100",
          combat: "75",
        },
      },
      {
        id: 300,
        name: "Green Goblin II",
        image: "https://www.superherodb.com/pictures2/portraits/10/100/25.jpg",
        powerstats: {
          intelligence: "75",
          strength: "55",
          speed: "37",
          durability: "50",
          power: "44",
          combat: "26",
        },
      },
    ];
    expect(isPresentInDeck(300, sampleCardsDeck)).toBe(true);
    expect(isPresentInDeck(100, sampleCardsDeck)).toBe(false);
  });
});
describe("test generateCards function ", () => {
  it("should return number of cards as passed to generateCards function", async () => {
    const cards = await generateCards(2);
    expect(cards.length).toBe(2);
  });
});

describe("test fetchCard function ", () => {
  it("should return number of cards as passed to generateCards function", async () => {
    const sampleCardID = 87;
    const urlForCard = `${URL}/${sampleCardID}`;
    const sampleCard = {
      id: "87",
      name: "Bionic Woman",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/10648.jpg",
      powerstats: {
        intelligence: "56",
        strength: "37",
        speed: "33",
        durability: "40",
        power: "20",
        combat: "40",
      },
    };
    const card = await fetchCard(urlForCard);
    expect(card).toEqual(sampleCard);
  });
});

describe("test generateMockCards function ", () => {
  it("should return number of cards as passed to generateCards function", async () => {
    const cards = await generateMockCards();
    expect(cards.length).toBe(14);
  });
});
