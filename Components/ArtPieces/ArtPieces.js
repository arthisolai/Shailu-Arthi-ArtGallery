import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <div className="art-pieces">
      {pieces.map((piece) => {
        console.log("Title:", piece.name);
        console.log("Artist:", piece.artist);
        console.log("Image:", piece.imageSource);

        return (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
          />
        );
      })}
    </div>
  );
}
