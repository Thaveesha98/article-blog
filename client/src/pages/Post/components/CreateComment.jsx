import React, { useState } from "react";
import axios from "axios";

const CreateComment = ({ PostId, updateComments }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!newComment.trim()) {
      console.error("Comment cannot be empty");
      return;
    }

    try {
      await axios.post("http://localhost:3001/comments", {
        commentBody: newComment,
        PostId: PostId,
      });
      setNewComment("");
      updateComments();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <div className="add-comment">
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <input
            className="input"
            type="text"
            placeholder="comments..."
            value={newComment}
            onChange={handleInputChange}
          />
          <div className="btn-wrapper">
            <button className="btn" type="submit">
              Add Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateComment;
