import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: -25px;
  left: 0;
`;
const TermsBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const LinkText = styled.a`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.textSoft};
  cursor: pointer;
  text-decoration: underline;
`;

const Details = () => {
  return (
    <Container>
      <LinkText>English (USA)</LinkText>
      <TermsBox>
        <LinkText>Help</LinkText>
        <LinkText>Privacy</LinkText>
        <LinkText>Terms</LinkText>
      </TermsBox>
    </Container>
  );
};
export default Details;
