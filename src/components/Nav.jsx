import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  background-color: #1f2833;
  display: flex;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  a {
    color: white;
    display: block;
    float: left;
    font-size: 2vh;
    padding: 17px;
    text-align: center;
    text-decoration: none;

    &:hover {
      background-color: #1f2850;
    }
  }
`;

const Nav = () => {
  const links = [
    { url: "https://github.com/markwuu/book-finder", name: "Github" },
    { url: "https://reactjs.org/", name: "React" },
    { url: "https://heroku.com/", name: "Heroku" },
    { url: "https://developers.google.com/books/", name: "Google Books API" },
    { url: "https://www.styled-components.com/", name: "styled-components" },
    { url: "https://github.com/axios/axios", name: "axios" }
  ];
  return (
    <React.Fragment>
      <NavBar>
        {links.map((link, i) => {
          return (
            <a key={i} href={link.url}>
              {link.name}
            </a>
          );
        })}
      </NavBar>
    </React.Fragment>
  );
};

export default Nav;
