import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

function Comment({ data }) {
  return (
    <div className="comment">
      <img src={require(`./../../assets/${data.author.avatar}`)} />

      <div className="content">
        <strong>{data.author.name}</strong> {data.content}
      </div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.object.isRequired
};

export default Comment;
