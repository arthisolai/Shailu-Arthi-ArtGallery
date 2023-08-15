import ArtPieces from "../Components/ArtPieces/ArtPieces";

export default function FavoritesPage({ artPieces, artPiecesInfo }) {
  const favoritePieces = artPieces.filter(
    (piece) => artPiecesInfo[piece.slug]?.isFavorite
  );

  return (
    <div>
      <h1>My Favorites</h1>
      <ArtPieces pieces={favoritePieces} />
    </div>
  );
}
