import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { Spotlight } from "../SpotLight/Spotlight";

test("renders navigation links correctly", () => {
  render(<Navigation />);

  const spotlightLink = screen.getByText(Spotlight);
  const piecesLink = screen.getByText(Pieces);

  expect(spotlightLink).toBeInTheDocument();
  expect(piecesLink).toBeInTheDocument();
});
