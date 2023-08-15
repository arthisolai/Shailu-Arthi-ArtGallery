import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  console.log(image, title, artist);
  return (
    <div className="art-piece-preview">
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
