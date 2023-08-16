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
          currentComment: "",
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
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        value={artPiecesInfo[slug]?.currentComment || ""}
        onChange={handleCommentChange}
        placeholder="Write a comment..."
        required
        className="comment-input"
      />
      <button type="submit" className="comment-submit-button">
        Send
      </button>
    </form>
  );
}
