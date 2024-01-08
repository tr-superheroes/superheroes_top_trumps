import "@testing-library/jest-dom";
import { waitFor } from "@testing-library/react";
import { server } from "../__mocks__/server";

import { it, expect, describe, beforeAll, afterEach, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

beforeAll(()=>server.listen());
afterEach(()=>server.resetHandlers());
afterAll(()=>server.close());

describe("test startGame component", () => {
  it("Test start game page", () => {
    render(<App />);
    expect(screen.getByText("Superhero")).toBeInTheDocument();
  });

  it("Test loading of start game page", async () => {
    render(<App />);
    await waitFor(() =>
      expect(screen.getByText("Loading")).toBeInTheDocument()
    );
  });

   it("Start Game button is present", async () => {
    render(<App />);
    expect(await screen.findByRole("button", { name: /Start Game/i }));
  });
});
