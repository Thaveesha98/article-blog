import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  let { id } = useParams({});
  const [postObj, setPostObj] = useState({});
  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byid/${id}`).then((response) => {
      console.log(response);
      setPostObj(response.data);
      if (response.data && response.data.updatedAt) {
        const updatedAtDate = new Date(response.data.updatedAt);
        const dateOptions = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = updatedAtDate.toLocaleDateString(
          undefined,
          dateOptions
        );
        setUpdatedAt(formattedDate);
      }
    });
  }, [id]);

  return (
    <div className="artical-page">
      <div className="artical-container">
        <div className="title">{postObj.title}</div>
        <div className="body">{postObj.titleText}</div>
        <div className="author">By:{postObj.userName}</div>
        <div className="update">Posted: {updatedAt}</div>
      </div>
      <div className="comment-container"></div>
    </div>
  );
};

export default Post;
