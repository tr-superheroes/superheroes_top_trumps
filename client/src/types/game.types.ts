export const FETCH_URL = "http://localhost:8080/api/cards/";

export type TrumpCard = {
  id: number;
  name: string;
  image: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
};
export type FetchGameResponse = Array<TrumpCard>;
