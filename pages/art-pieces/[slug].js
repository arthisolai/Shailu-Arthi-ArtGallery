import { useRouter } from "next/router";
import ArtPieceDetails from "../../Components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPieceDetailPage({ artPieces }) {
  console.log("artPieces", artPieces);
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);
  if (!slug) return null;
  const artPiece = artPieces.find((piece) => piece.slug === slug);

  if (!artPiece) {
    return <div>Art piece not available</div>;
  }

  return (
    <div>
      <button onClick={() => router.push("/art-pieces")}>← Back</button>
      <ArtPieceDetails
        image={artPiece.imageSource}
        title={artPiece.name}
        artist={artPiece.artist}
        year={artPiece.year}
        genre={artPiece.genre}
      />
    </div>
  );
}