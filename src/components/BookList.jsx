import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: stretch;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 40px;
  padding-left: 75px;
  padding-right: 75px;
`;

const BookContainer = styled.div`
  background: rgba(25, 25, 25, 0.75);
  border: 2px solid #1f2833;
  border-radius: 4px;
  color: white;
  flex-basis: 15%;
  margin: 5px;
  padding: 10px;

  img {
    padding-bottom: 5px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 25px;
  }
`;

const Title = styled.div`
  font-size: 1.1vw;
  text-align: center;
`;

const BookCover = styled.a`
  display: inline-block;
  opacity: 0.65;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.4s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;

  &:hover {
    opacity: 1;
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Author = styled.div`
  font-size: 0.75vw;
`;

const Publisher = styled.div`
  font-size: 0.75vw;
`;

class BookList extends Component {
  render() {
    return (
      <Container>
        {this.props.bookinfo.map((book, i) => {
          return (
            <BookContainer key={i} className={book.title + i}>
              <Title>{book.title}</Title>
              <BookCover href={book.infoLink}>
                <img src={book.thumbnail} alt="" />
              </BookCover>
              <TextContainer>
                <Author>
                  {book.authors
                    ? " Authored by " + book.authors
                    : " No author found! "}
                </Author>
                <Publisher>
                  {book.publisher
                    ? [<span>Publisher: </span>, <span>{book.publisher}</span>]
                    : "No publisher found!"}
                </Publisher>
              </TextContainer>
            </BookContainer>
          );
        })}
      </Container>
    );
  }
}

export default BookList;
