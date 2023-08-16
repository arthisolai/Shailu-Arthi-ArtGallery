import ArtPieces from "../Components/ArtPieces/ArtPieces";

export default function FavoritesPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favoritePieces = artPieces.filter(
    (piece) => artPiecesInfo[piece.slug]?.isFavorite
  );

  return (
    <div>
      <h1>My Favorites</h1>
      <ArtPieces
        pieces={favoritePieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
