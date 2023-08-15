import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  console.log(image, title, artist);
  return (
    <div className="art-piece-preview">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        data-testid="art-piece-image"
      />
      <h3>{title}</h3>
      <p>By: {artist}</p>
    </div>
  );
}
