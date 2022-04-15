import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import {  Link } from "react-router-dom";
export default class Blog extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    let thisVariable = this;
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // handle success
        //console.log(response);
        thisVariable.setState({ posts: response.data });
        console.log(this.state.posts);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  render() {
    const posts = this.state.posts;
    const allposts = posts.map((post, index) => {
      return (
        <div>
          <a href="" key={index}>{post.title}</a>
          <br></br>
          <p>{post.body}</p>
        </div>
      );
    });
    return (
      <div>
        <Card>
          <Card.Body>
          <Link to="/writepost">Add New</Link> <br></br>
              {allposts}
           </Card.Body>
        </Card>
      </div>
    );
  }
}
