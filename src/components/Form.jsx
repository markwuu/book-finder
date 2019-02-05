import React, { Component } from "react";
import Button from "./UI/SearchButton";
import Input from "./UI/Input";
import { SearchContainer, BookForm } from "./UI/FormContainer";

class Form extends Component {
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.getBooks();
  };

  render() {
    return (
      <SearchContainer>
        <BookForm className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Input
            placeholder={"Find a book"}
            onChange={this.props.handleInput}
            required
          />{" "}
          <Button type="submit" />
        </BookForm>
      </SearchContainer>
    );
  }
}

export default Form;
