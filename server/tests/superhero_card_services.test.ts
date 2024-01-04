import { getCards } from "../services/superhero_card_services";

describe("test getCards function ", () => {
  it("should return number of cards as requested to getCards function", async () => {
    const cards = await getCards(2);
    expect(cards.length).toBe(2);
  });
});
