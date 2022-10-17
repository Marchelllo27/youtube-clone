import styled from "styled-components";

const Container = styled.small`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.textSoft};
  cursor: pointer;
`;

const ChangeMode = ({ resetForm, showLoginForm, setShowLoginForm }) => {
  const changeModeHandler = () => {
    if (!showLoginForm) {
      resetForm();
    }

    setShowLoginForm(prev => !prev);
  };

  return (
    <Container onClick={changeModeHandler}>
      {showLoginForm ? "Don't have an account yet?" : "Already have an account?"}
    </Container>
  );
};
export default ChangeMode;
