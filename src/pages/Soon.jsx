import styled from "styled-components";

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2022;
  display: grid;
  place-items: center;
`;

const Modal = styled.div`
  width: 90%;
  max-width: 40rem;
  height: 10rem;
  color: white;
  font-size: 3vw;
  border-radius: 20px;
  background-color: #474747;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Soon = () => {
  return (
    <Container>
      <Modal>Will be Ready Soon</Modal>
    </Container>
  );
};
export default Soon;
