import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../../shared/Card/Card";

const Articles = () => {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response.data);
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
      {listOfPosts.map((value, id) => (
        <Card
          title={value.title}
          text={value.titleText}
          author={value.userName}
        />
      ))}
    </div>
  );
};

export default Articles;
