import React from "react";
import Articles from "./components/Articles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Link to="/createpost">Create the post</Link>
      <Articles />
    </div>
  );
};

export default Home;
