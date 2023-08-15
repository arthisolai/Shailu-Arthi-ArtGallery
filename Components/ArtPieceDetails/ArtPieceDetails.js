import React from "react";
import Image from "next/image";
import FavoriteButton from "../Favorite/FavoriteButton";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  onToggleFavorite,
  artPiecesInfo,
}) {
  console.log("ArtPieceDetailPage re-rendered");
  const isFavorite = artPiecesInfo[slug]?.isFavorite;

  return (
    <div className="art-piece-details">
      <Image src={image} alt={title} width={500} height={500} />
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </div>
  );
}
