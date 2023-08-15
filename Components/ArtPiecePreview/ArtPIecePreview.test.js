import React from "react";
import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview"; // Adjust the import path as needed

const artPiece = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
};

test("displays correct title and artist", () => {
  render(
    <ArtPiecePreview
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
    />
  );

  const titleElement = screen.getByText(artPiece.name);
  const artistElement = screen.getByText(`By: ${artPiece.artist}`);

  expect(titleElement).toBeInTheDocument();
  expect(artistElement).toBeInTheDocument();
});
