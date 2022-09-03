import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`;

const ActionButton = ({ icon, text, onClick, likesAmount, dislikesAmount }) => {
  return (
    <Container onClick={onClick}>
      {likesAmount && likesAmount}
      {dislikesAmount && dislikesAmount}
      {icon}
      {text}
    </Container>
  );
};
export default ActionButton;
