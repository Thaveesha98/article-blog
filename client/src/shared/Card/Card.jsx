import React from "react";

const Card = ({ title, text, author }) => {
  return (
    <div className="post">
      <div className="title">{title}</div>
      <div className="body">{text}</div>
      <div className="user-wrapper">
        <div className="author">{author}</div>
      </div>
    </div>
  );
};

export default Card;
