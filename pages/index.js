import { useState } from "react";
import { Spotlight } from "../Spotlight";

export default function HomePage() {
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

  if (error) return <div>Error loading art pieces</div>;
  if (!artPieces) return <div>Loading...</div>;

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Spotlight image={artPieces.imageSource} artist={artPieces.artist} />
    </div>
  );
}
