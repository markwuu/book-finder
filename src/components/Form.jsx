import React, { Component } from "react";
import styled from "styled-components";
import magnifier from "../magnifier.svg";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 18vh;
  padding-bottom: 1.5vh;
`;

const BookForm = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  border: 2px solid #ececec;
  font-size: 10px;
  padding: 10px;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  font-size: 35px;
  &::-webkit-input-placeholder {
    color: #ececec;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  padding: 1.5vw;
  background: url(${magnifier}) no-repeat center;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: #1f2833;

  &:hover,
  &:focus {
    background-color: #1f2850;
  }
`;
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
