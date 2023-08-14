import React from "react";
import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces"; // Adjust the import path as needed

const artPiece = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
};

test("displays correct art piece information", () => {
  render(<ArtPieces pieces={[artPiece]} />);

  const titleElement = screen.getByText(artPiece.name);
  const artistElement = screen.getByText(`By: ${artPiece.artist}`);
  const imageElement = screen.getByAltText(artPiece.name);

  expect(titleElement).toBeInTheDocument();
  expect(artistElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
