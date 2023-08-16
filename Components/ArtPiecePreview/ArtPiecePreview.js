import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../Favorite/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  artPiecesInfo,
  onToggleFavorite,
  piece,
}) {
  console.log("onToggleFavorite in ArtPiecePreview:", onToggleFavorite);
  console.log("artPiecesInfo in ArtPiecePreview:", artPiecesInfo);

  console.log("slug:", slug);

  // const isFavorite = artPiecesInfo[slug]?.isFavorite;
  const isFavorite = artPiecesInfo && artPiecesInfo[slug]?.isFavorite;

  return (
    <div className="art-piece-preview">
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        piece={piece}
      />
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          data-testid="art-piece-image"
        />
      </Link>
      <h3>{title}</h3>
      <p>By: {artist}</p>
    </div>
  );
}
