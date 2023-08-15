import ArtPieces from "../../Components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({
  artPieces,
  artPiecesInfo,
  toggleFavorite,
}) {
  //   return <ArtPieces pieces={artPieces} />;
  console.log("artPieces", artPieces);
  return (
    <ArtPieces
      key={artPieces.slug}
      image={artPieces.imageSource}
      title={artPieces.name}
      artist={artPieces.artist}
      pieces={artPieces}
      artPiecesInfo={artPiecesInfo}
      toggleFavorite={toggleFavorite}
    />
  );
}
