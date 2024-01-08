import { it, expect, describe } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { PowerstatsList } from "./powerstats-list";
import { PowerstatsObj } from "../types/game.types";

describe("test Powerstats list component", () => {
  it("Powerstats component should be rendered for a given set of props", () => {
    const samplePowerStats: PowerstatsObj = {
      intelligence: "70",
      strength: "46",
      speed: "67",
      durability: "87",
      power: "4",
      combat: "15",
    };
    render(<PowerstatsList powerstats={samplePowerStats} />);
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(Object.keys(samplePowerStats).length);
    const powerstats = items.map((item) => item.textContent);
    expect(powerstats).toEqual([
      "intelligence: 70",
      "strength: 46",
      "speed: 67",
      "durability: 87",
      "power: 4",
      "combat: 15",
    ]);
  });
});
