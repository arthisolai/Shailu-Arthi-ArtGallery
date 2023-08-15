import React from "react";
import useSWR from "swr";
import { Spotlight } from "../Components/SpotLight/Spotlight";

export default function SpotlightPage({
  artPieces,
  artPiecesInfo,
  toggleFavorite,
}) {
  function getRandomArtPiece(artPieces) {
    const randomIndex = Math.floor(Math.random() * artPieces.length);
    console.log("randomIndex", randomIndex);
    return artPieces[randomIndex];
  }

  if (!artPieces) {
    return <div>Loading...</div>;
  }

  const spotlight = getRandomArtPiece(artPieces);
  const isFavorite = artPiecesInfo[spotlight.slug]?.isFavorite;
  return (
    <div>
      <h1>Art Gallery</h1>
      {/* <ArtPieces pieces={artPieces} /> */}
      <Spotlight
        image={spotlight.imageSource}
        artist={spotlight.artist}
        toggleFavorite={() => toggleFavorite(spotlight.slug)}
        isFavorite={isFavorite}
      />
    </div>
  );
}
