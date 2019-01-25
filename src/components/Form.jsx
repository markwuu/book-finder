import React, { Component } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 85px;
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
  font-size: 30px;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: #5ab9ea;
  transition-property: #5ab9ea;
  -webkit-transition-duration: 0.3s;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #202832;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.4s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  &:hover {
    color: white;
    &:before {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
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
          <Button type="submit">Search</Button>
        </BookForm>
      </SearchContainer>
    );
  }
}

export default Form;
