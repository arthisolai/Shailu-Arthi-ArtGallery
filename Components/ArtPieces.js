import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <div className="art-pieces">
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.title}
          artist={piece.artist}
        />
      ))}
    </div>
  );
}
