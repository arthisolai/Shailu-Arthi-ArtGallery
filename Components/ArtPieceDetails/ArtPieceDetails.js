import React, { useState } from "react";
import Image from "next/image";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comments/Comments.js"; // Adjust the path as needed

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (commentText) => {
    if (commentText.trim() !== "") {
      const currentDate = new Date().toLocaleDateString(); // Get the current date
      const newComment = {
        comment: commentText,
        date: currentDate,
      };
      setComments([...comments, newComment]);
    }
  };

  return (
    <div className="art-piece-details">
      <Image src={image} alt={title} width={500} height={500} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <Comment comments={comments} />
      <CommentForm onSubmitComment={handleCommentSubmit} />
    </div>
  );
}
