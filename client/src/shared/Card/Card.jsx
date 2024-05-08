import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, text, author, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="post"
      onClick={() => {
        navigate(`/article/${id}`);
      }}>
      <div className="title">{title}</div>
      <div className="body">{text}</div>
      <div className="user-wrapper">
        <div className="author">{author}</div>
      </div>
    </div>
  );
};

export default Card;
