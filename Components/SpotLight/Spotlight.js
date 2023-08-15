import React from "react";
import Image from "next/image";
import FavoriteButton from "../Favorite/FavoriteButton";

export function Spotlight({ image, artist, isFavorite, toggleFavorite }) {
  return (
    <div className="spotlight">
      <Image src={image} alt={artist} width={500} height={500} />
      <p>Artist: {artist}</p>
      <FavoriteButton isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
    </div>
  );
}
