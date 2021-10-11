import { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";
class PostList extends Component {
  componentDidMount() {
    super();
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props.posts);
    return <div className="">Post List</div>;
  }
}
// working together with ../reducers/index.js
const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
