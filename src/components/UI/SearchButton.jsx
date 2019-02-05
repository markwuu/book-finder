import styled from "styled-components";
import magnifier from "../../magnifier.svg";

const Button = styled.button`
  background: url(${magnifier}) no-repeat center;
  background-color: #1f2833;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 0;
  border-top-right-radius: 3px;
  padding: 1.5vw;

  &:hover,
  &:focus {
    background-color: #1f2850;
  }
`;

export default Button;
