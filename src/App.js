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

  componentDidMount() {
    this.getBooks();
  }

  handleInput = e => {
    let value = e.target.value;
    this.setState({
      search: value
    });
  };

  //get book data and sets it to state
  getBooks = () => {
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
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Nav />
        <Form getBooks={this.getBooks} handleInput={this.handleInput} />
        <BookList bookinfo={this.state.books} />
      </div>
    );
  }
}

export default App;
