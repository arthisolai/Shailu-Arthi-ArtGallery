import ArtPieces from "../../Components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  console.log("onToggleFavorite in ArtPiecesPage:", onToggleFavorite);

  return (
    <ArtPieces
      key={artPieces.slug}
      image={artPieces.imageSource}
      title={artPieces.name}
      artist={artPieces.artist}
      pieces={artPieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
