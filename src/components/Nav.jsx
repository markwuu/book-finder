import React from "react";
import NavBar from "./UI/NavBar";

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
          return <a href={link.url}>{link.name}</a>;
        })}
      </NavBar>
    </React.Fragment>
  );
};

export default Nav;
