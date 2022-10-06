import React from "react";
export const Posts = ({ listOfPosts }) => {
  return (
    <div>
      {listOfPosts.length > 0 ? (
        <div>
          {listOfPosts.map((post, i) => {
            return (
              <React.Fragment key={post.id}>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
                <hr />
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};
