import { Card } from "../types/cards.types";
import { generateCards } from "./generate_superhero_cards";

export async function getCards(amount: number): Promise<Card[]> {
  // in the real world we might call a db here, but we have a function
  // that generates random misdemeanours so that'll do instead
  return await generateCards(amount);
}
