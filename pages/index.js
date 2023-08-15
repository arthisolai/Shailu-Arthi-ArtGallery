import React from "react";
import { useState, useEffect } from "react";
import { Spotlight } from "../Components/SpotLight/Spotlight";

export default function SpotlightPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [spotlight, setSpotlight] = useState(null);

  function getRandomArtPiece(artPieces) {
    const randomIndex = Math.floor(Math.random() * artPieces.length);
    return artPieces[randomIndex];
  }

  useEffect(() => {
    setSpotlight(getRandomArtPiece(artPieces));
  }, [artPieces]);

  if (!artPieces || !spotlight) {
    return <div>Loading...</div>;
  }

  // const spotlight = getRandomArtPiece(artPieces);
  const isFavorite = artPiecesInfo[spotlight.slug]?.isFavorite;
  console.log("SpotlightPage slug:", spotlight.slug);
  console.log("SpotlightPage isFavorite:", isFavorite);
  console.log("SpotlightPage onToggleFavorite:", onToggleFavorite);
  return (
    <div>
      <h1>Art Gallery</h1>

      <Spotlight
        image={spotlight.imageSource}
        artist={spotlight.artist}
        slug={spotlight.slug}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
}
