import ArtPieces from "../../Components/ArtPieces";

export default function ArtPiecesPage({ artPieces }) {
  //   return <ArtPieces pieces={artPieces} />;
  console.log("artPieces", artPieces);
  return (
    <ArtPieces
      key={artPieces.slug}
      image={artPieces.imageSource}
      title={artPieces.name}
      artist={artPieces.artist}
      pieces={artPieces}
    />
  );
}
