
import { useState } from "react";
import { Spotlight } from "../Spotlight";
import React from "react";
import useSWR from "swr";
import ArtPieces from "../Components/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);
  
  const [spotlightPiece, setSpotlightPiece] = useState(null);
  function getRandomArtPiece(artPieces) {
    const randomIndex = Math.floor(Math.random() * artPieces.length);
    return artPieces[randomIndex];
  }

  useEffect(() => {
    if (artPieces) {
      setSpotlightPiece(getRandomArtPiece(artPieces));
    }
  }, []);

  if (!artPieces) return <div>Loading...</div>;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Failed to Load...</div>;
  }

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={artPieces} />
  <Spotlight image={artPieces.imageSource} artist={artPieces.artist} />
    </div>
  );
}
