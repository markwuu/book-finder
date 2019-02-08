import React from "react";
import {
  Container,
  BookContainer,
  Title,
  BookCover,
  TextContainer,
  Author,
  Publisher
} from "./UI/BookInfo";

const BookList = props => {
  return (
    <Container>
      {props.bookinfo.map((book, i) => {
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
                  ? [<span key={i}>Publisher: {book.publisher}</span>]
                  : "No publisher found!"}
              </Publisher>
            </TextContainer>
          </BookContainer>
        );
      })}
    </Container>
  );
};

export default BookList;
