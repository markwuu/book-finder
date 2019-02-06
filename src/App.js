import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/Form";
import BookList from "./components/BookList";
import Nav from "./components/Nav";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      books: []
    };
  }

  handleInput = e => {
    let value = e.target.value;
    this.setState({
      search: value
    });
  };

  storeBookData = () => {
    axios({
      method: "get",
      url: "https://www.googleapis.com/books/v1/volumes?q=" + this.state.search
    })
      .then(res => {
        const books = res.data.items.map((book, index) => {
          const { title, authors, infoLink, publisher } = book.volumeInfo;
          const { thumbnail } = book.volumeInfo.imageLinks;
          return { title, authors, infoLink, publisher, thumbnail };
        });
        this.setState({
          books
        });
      })
      .catch(err => {
        console.log("An error occurred!", err);
      });
  };
  render() {
    return (
      <div>
        <Nav />
        <Form
          storeBookData={this.storeBookData}
          handleInput={this.handleInput}
        />
        <BookList bookinfo={this.state.books} />
      </div>
    );
  }
}

export default App;
