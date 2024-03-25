import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../../shared/Card/Card";

const Articles = () => {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}>
      {listOfPosts.map((post) => (
        <Card
          id={post.id}
          title={post.title}
          text={post.titleText}
          author={post.userName}
        />
      ))}
    </div>
  );
};

export default Articles;
