import React from "react";
import Image from "next/image";
import FavoriteButton from "../Favorite/FavoriteButton";

export function Spotlight({
  image,
  artist,
  isFavorite,
  onToggleFavorite,
  slug,
}) {
  console.log("onToggleFavorite in Spotlight:", onToggleFavorite);
  console.log("Spotlight slug:", slug);
  console.log("Spotlight isFavorite:", isFavorite);
  console.log("Spotlight onToggleFavorite:", onToggleFavorite);
  return (
    <div className="spotlight">
      <Image src={image} alt={artist} width={500} height={500} />
      <p>Artist: {artist}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)}
      />
    </div>
  );
}
