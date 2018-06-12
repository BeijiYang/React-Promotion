import React, { Component } from "react";
import PostItem from "./PostItem";

const data = [
  { title: "talk about React", author: "Tom", time: "1 hours ago" },
  { title: "whats your favorite frame", author: "Jerry", time: "2 hours ago" },
  { title: "the era of Web App", author: "Jeason", time: "3 hours ago" }
];

class PostList extends Component {
  render() {
    return (
      <div>
        POSTS
        <ul>
          {data.map(item => (
            <PostItem
              title={item.title}
              author={item.author}
              time={item.time}
              key={item.time}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
