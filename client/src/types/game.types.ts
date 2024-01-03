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
export type NO_OF_CARDS = 7;
