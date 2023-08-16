import React from "react";

export default function CommentForm({ slug, artPiecesInfo, setArtPiecesInfo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString();
    const newComment = {
      comment: artPiecesInfo[slug]?.currentComment || "",
      date: currentDate,
    };

    setArtPiecesInfo((prevInfo) => {
      const currentComments = prevInfo[slug]?.comments || [];
      return {
        ...prevInfo,
        [slug]: {
          ...prevInfo[slug],
          comments: [...currentComments, newComment],
          currentComment: "", // Clear the current comment
        },
      };
    });
  };

  const handleCommentChange = (e) => {
    const commentText = e.target.value;
    setArtPiecesInfo((prevInfo) => ({
      ...prevInfo,
      [slug]: {
        ...prevInfo[slug],
        currentComment: commentText,
      },
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={artPiecesInfo[slug]?.currentComment || ""}
        onChange={handleCommentChange}
        placeholder="Write a comment..."
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}
