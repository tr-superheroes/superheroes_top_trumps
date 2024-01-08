import "@testing-library/jest-dom";
import { Card, CardProps } from "./card";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Test Card component", () => {
  it("Test if css passed as props is present", () => {
    const sampleCardProps: CardProps = {
      cardImage: "/../src/assets/images/card3.png",
      cssClass: "pc",
    };
    render(<Card {...sampleCardProps} />);
    const img = screen.getByRole("img");
    expect(img.className).toBe("pc");
  });
});
