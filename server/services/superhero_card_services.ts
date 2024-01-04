import { Card } from "../types/cards.types";
import { generateCards } from "./generate_superhero_cards";

export async function getCards(amount: number): Promise<Card[]> {
  return await generateCards(amount);
}
