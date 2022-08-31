import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  max-width: 40rem;
  background-color: gray;
  color: #dbdbdb;
  display: grid;
  place-items: center;
`;

const Modal = ({ text }) => {
  return <Container>{text}</Container>;
};
export default Modal;
