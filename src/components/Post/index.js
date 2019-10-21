import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import Comment from "../Comment";

function Post({ data }) {
  return (
    <div className="post">
      <div className="post-title">
        <img src={require(`./../../assets/${data.author.avatar}`)} />
        <div className="post-author">
          <strong>{data.author.name}</strong>
          <small>{data.date}</small>
        </div>
      </div>

      <div className="post-description">{data.content}</div>
      <div className="separator"></div>
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}

Post.propTypes = {
  data: PropTypes.object.isRequired
};

export default Post;
