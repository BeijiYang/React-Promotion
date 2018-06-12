import React, { Component } from "react";

class PostList extends Component {
  render() {
    return (
      <div>
        POSTS
        <ul>
          <li>
            <div>talk about React</div>
            <div>
              user: <span>Tom</span>
            </div>
            <div>
              time: <span>3 hours ago</span>
            </div>
          </li>
          <li>
            <div>whats your favorite frame</div>
            <div>
              user: <span>Jerry</span>
            </div>
            <div>
              time: <span>3 hours ago</span>
            </div>
          </li>
          <li>
            <div>the era of Web App</div>
            <div>
              user: <span>Jeason</span>
            </div>
            <div>
              time: <span>3 hours ago</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default PostList;
