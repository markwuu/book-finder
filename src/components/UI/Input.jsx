import styled from "styled-components";

const Input = styled.input`
  border: 2px solid #ececec;
  border-bottom-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  font-size: 5vh;
  padding: 10px;
  &::-webkit-input-placeholder {
    color: #ececec;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export default Input;
