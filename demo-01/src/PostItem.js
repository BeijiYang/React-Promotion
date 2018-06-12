import React from "react";

function PostItem(props) {
  const handleClick = () => {
    props.onVote(props.post.id);
  };
  const { post } = props;

  return (
    <li>
      <div>{post.title}</div>
      <div>
        user: <span>{post.author}</span>
      </div>
      <div>
        time: <span>{post.time}</span>
      </div>
      <div>
        <button onClick={handleClick}>thumbUp</button>: {post.vote}
      </div>
    </li>
  );
}

export default PostItem;
