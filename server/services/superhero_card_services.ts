import { Card } from "../types/cards.types";
import { generateCards, generateMockCards } from "./generate_superhero_cards";

export async function getCards(amount: number): Promise<Card[]> {
  return await generateCards(amount);
}

export async function getMockCards(): Promise<Card[]> {
  return await generateMockCards();
}
