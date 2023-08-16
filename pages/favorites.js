import ArtPieces from "../Components/ArtPieces/ArtPieces";

export default function FavoritesPage({ artPiecesInfo, onToggleFavorite }) {
  const favoritePieces = artPiecesInfo.filter((piece) => piece.isFavorite);

  return (
    <div>
      <h1>My Favorites</h1>
      <ArtPieces pieces={favoritePieces} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
