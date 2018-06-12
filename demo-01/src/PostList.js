import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    //timer
    this.timer = null;
    this.handleVote = this.handleVote.bind(this);
  }

  // 通过帖子 id 过滤，返回修改后的 posts 对象
  handleVote(id) {
    const posts = this.state.posts.map(item => {
      // 先加再赋值 vote: ++item.vote
      let newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
      return newItem;
    });
    this.setState({ posts });
  }

  componentDidMount() {
    //timer
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: "0",
            title: "talk about React",
            author: "Tom",
            time: "1 hours ago",
            vote: "0"
          },
          {
            id: "1",
            title: "whats your favorite frame",
            author: "Jerry",
            time: "2 hours ago",
            vote: "0"
          },
          {
            id: "2",
            title: "the era of Web App",
            author: "Jeason",
            time: "3 hours ago",
            vote: "0"
          }
        ]
      });
    }, 1000);
  }
  //timer
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return (
      <div>
        POSTS
        <ul>
          {this.state.posts.map(item => (
            <PostItem post={item} onVote={this.handleVote} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
