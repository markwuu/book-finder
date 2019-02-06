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

export default NavBar;
