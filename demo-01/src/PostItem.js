import React, { Component } from "react";

class PostItem extends Component {
  render() {
    const { title, time, author } = this.props;
    return (
      <li>
        <div>{title}</div>
        <div>
          user: <span>{author}</span>
        </div>
        <div>
          time: <span>{time}</span>
        </div>
      </li>
    );
  }
}

export default PostItem;
