import React from "react";
import Image from "next/image";

export function Spotlight({ image, artist }) {
  return (
    <div className="spotlight">
      <Image src={image} alt={artist} width={500} height={500} />
      <p>Artist: {artist}</p>
    </div>
  );
}
