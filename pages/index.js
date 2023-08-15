import React from "react";
import useSWR from "swr";
import { Spotlight } from "../Components/Spotlight";

export default function SpotlightPage({ artPieces }) {
  function getRandomArtPiece(artPieces) {
    const randomIndex = Math.floor(Math.random() * artPieces.length);
    console.log("randomIndex", randomIndex);
    return artPieces[randomIndex];
  }

  if (!artPieces) {
    return <div>Loading...</div>;
  }

  const spotlight = getRandomArtPiece(artPieces);

  return (
    <div>
      <h1>Art Gallery</h1>
      {/* <ArtPieces pieces={artPieces} /> */}
      <Spotlight image={spotlight.imageSource} artist={spotlight.artist} />
    </div>
  );
}
