export const FETCH_URL = "http://localhost:8080/api/cards/";

export type TrumpCard = {
  id: string;
  name: string;
  image: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
};
export type FetchGameResponse = Array<TrumpCard>;
export const NO_OF_CARDS = 7;

export const Powerstats = [
  "intelligence",
  "strength",
  "speed",
  "durability",
  "power",
  "combat",
] as const;
export type PowerstatsType = (typeof Powerstats)[number];

export type PowerstatsObj = {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
};
