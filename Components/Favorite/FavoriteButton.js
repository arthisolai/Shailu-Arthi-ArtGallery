import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  // if (isFavorite) {
  //   return (
  //     <div onClick={onToggleFavorite} style={{ cursor: "pointer" }}>
  //       <Image src="/heart.svg" alt="Favorite" width={24} height={24} />
  //     </div>
  //   );
  // }

  return <button onClick={onToggleFavorite}>Add to Favorites ❤️</button>;
}
