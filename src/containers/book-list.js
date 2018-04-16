import React, { Component } from "react";
import { connect } from "react-redux";

import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

//Anything returned from this function will end up as props to BookList Container
function mapStateToProps(state) {
  return { books: state.books };
}

//Anything returned from this function will end up as props to BookList Container
function mapDispatchToProps(dispatch) {
  //When selectBook is called, the result should be passed to all the reducers
  //So bindActionCreators (passes or dispatches) the result of the (selectBook)
  //action to all the reducers through the dispatch function as the
  //second argument of the bindActionCreators function.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote BookList from a component to container - it needs to know about the new Dispatch method, selectBook.
//Make it available as props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
