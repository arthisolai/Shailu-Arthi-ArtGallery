import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavoriteButton from "../Favorite/FavoriteButton";

export default function ArtPieces({
  pieces,
  artPiecesInfo,
  setArtPiecesInfo,
  onToggleFavorite,
}) {
  console.log("onToggleFavorite in ArtPieces:", onToggleFavorite);
  console.log("artPiecesInfo in ArtPieces component:", artPiecesInfo);

  return (
    <>
      <h2>Art Pieces</h2>
      <div className="art-pieces">
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            piece={piece}
            isFavorite={artPiecesInfo && artPiecesInfo[piece.slug]?.isFavorite}
            artPiecesInfo={artPiecesInfo}
            setArtPiecesInfo={setArtPiecesInfo}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
        <FavoriteButton
          isFavorite={pieces.slug}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
    </>
  );
}
