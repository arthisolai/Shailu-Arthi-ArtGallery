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
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "#A1CCD1",
          padding: "30px",
          margin: "0",
          marginTop: "0",
          marginBottom: "40px",
        }}
      >
        Art-Gallery App
      </h1>
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
