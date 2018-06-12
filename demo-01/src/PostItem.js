import React, { Component } from "react";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0
    };
  }

  handleClick() {
    let vote = this.state.vote;
    vote++;
    this.setState({ vote });
  }

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
        <div>
          {" "}
          <button
            onClick={() => {
              this.handleClick();
            }}
          >
            thumbUp
          </button>: {this.state.vote}
        </div>
      </li>
    );
  }
}

export default PostItem;
