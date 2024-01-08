import "@testing-library/jest-dom";
import { waitFor } from "@testing-library/react";
import { server } from "../__mocks__/server";

import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
describe("test startGame component", () => {
  // it("Test start game page", () => {
  //   render(<App />);
  //   expect(screen.getByText("Superhero")).toBeInTheDocument();
  // });



  it("Test loading of start game page", async () => {
    render(<App />);
    await waitFor(() =>
      expect(screen.getByText("Loading")).toBeInTheDocument()
    );
  });

   it("works", async () => {
    server.listen();
    render(<App />);
    expect(await screen.findByRole("button", { name: /Start Game/i }));
    server.resetHandlers();
    server.close();
  });

  // it.only("Test error loading page when page loaded but server not up", async () => {
  //   render(<App />);
  //   await waitFor(() =>
  //     expect(screen.getByText("Error loading the game")).toBeInTheDocument()
  //   );
  // });
});
