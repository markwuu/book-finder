import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  overflow: hidden;
  background-color: #1f2833;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 17px;
    text-decoration: none;
    &:hover {
      background-color: #1f2850;
    }
  }
`;

const Nav = () => {
  return (
    <React.Fragment>
      <NavBar>
        <a href="https://github.com/markwuu">Github</a>
        <a href="https://reactjs.org/">React</a>
        <a href="https://heroku.com/">Heroku</a>
      </NavBar>
    </React.Fragment>
  );
};

export default Nav;
