import React, { useState } from "react";
import Image from "next/image";
import FavoriteButton from "../Favorite/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  onToggleFavorite,
  artPiecesInfo,
  setArtPiecesInfo,
}) {
  const [comments, setComments] = useState([]);
  console.log("ArtPieceDetailPage re-rendered");
  const isFavorite = artPiecesInfo[slug]?.isFavorite;

  const handleCommentSubmit = (commentText) => {
    if (commentText.trim() !== "") {
      const currentDate = new Date().toLocaleDateString();
      const newComment = {
        comment: commentText,
        date: currentDate,
      };
      setComments([...comments, newComment]);
    }
  };

  return (
    <>
      <div className="art-piece-details">
        <h2>{title}</h2>
        <Image src={image} alt={title} width={500} height={500} />
        <p>Artist: {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          slug={slug}
        />
        <Comments comments={artPiecesInfo[slug]?.comments || []} />
        <CommentForm
          slug={slug}
          artPiecesInfo={artPiecesInfo}
          setArtPiecesInfo={setArtPiecesInfo}
        />
      </div>
    </>
  );
}
