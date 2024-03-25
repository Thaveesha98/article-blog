import React from "react";
import ArticleForm from "./components/ArticleForm";
import { Link } from "react-router-dom";

const CreatePost = () => {
  return (
    <div>
      <Link to="/">Go to post</Link>
      <ArticleForm />
    </div>
  );
};

export default CreatePost;
