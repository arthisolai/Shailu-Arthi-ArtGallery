import { useState } from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  console.log("onToggleFavorite in FavoriteButton:", onToggleFavorite);
  console.log("Received slug in FavoriteButton:", slug);

  return (
    <button
      onClick={() => {
        console.log("Button clicked with slug:", slug);
        onToggleFavorite(slug);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <p>❤️</p> : <p>🩶</p>}
    </button>
  );
}
