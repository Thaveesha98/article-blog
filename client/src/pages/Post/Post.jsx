import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreateComment from "./components/CreateComment";

const Post = () => {
  const { id } = useParams();
  const [postObj, setPostObj] = useState({});
  const [commentObj, setCommentObj] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await axios.get(
          `http://localhost:3001/posts/byid/${id}`
        );
        setPostObj(postResponse.data);

        const commentResponse = await axios.get(
          `http://localhost:3001/comments/${id}`
        );
        setCommentObj(commentResponse.data);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const updateComments = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/comments/${id}`, {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      });
      setCommentObj(response.data);
    } catch (error) {
      console.error("Error updating comments:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="article-page">
      <div className="article-container">
        <div className="title">{postObj.title}</div>
        <div className="body">{postObj.titleText}</div>
        <div className="author">By: {postObj.userName}</div>
        <div className="update">
          Posted: {new Date(postObj.updatedAt).toLocaleDateString()}
        </div>
      </div>
      <div className="comment-container">
        <div className="add-comment">
          <CreateComment PostId={id} updateComments={updateComments} />
        </div>
        <div className="display-comment">
          {commentObj.map((comment) => (
            <div className="comment-wrapper" key={comment.id}>
              <div>
                <div className="comment">{comment.commentBody}</div>
                <div className="date">
                  Updated: {new Date(comment.updatedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
