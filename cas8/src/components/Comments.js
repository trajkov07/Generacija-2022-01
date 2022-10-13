import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { API_URL } from "../Konstanti/constants";
import { getComments } from "../services/commentsService";
export const Comments = () => {
  const [comments, setComments] = useState([]);

  //   useEffect(() => {
  //     fetch(API_URL + "comments")
  //       .then((result) => result.json())
  //       .then((jsonValue) => setComments(jsonValue));
  //   }, []);
  const object = useLocation();
  console.log(object);
  let commentState = object.state;
  console.log(commentState);

  useEffect(() => {
    getComments().then((data) => setComments(data));
  }, []);

  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => {
          return (
            <React.Fragment key={comment.id}>
              <p>Name: {comment.name}</p>
              <p>Email: {comment.email}</p>
              <p>Body: {comment.body}</p>
              <hr />
            </React.Fragment>
          );
        })
      ) : (
        <h2>Loading .....</h2>
      )}
      <div>{commentState.comment}</div>
      <h1>{commentState.name}</h1>
    </div>
  );
};
