import { forwardRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  padding: 0.3rem 0.4rem;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  @media (min-width: 30rem) {
    padding: 0.3rem 1rem;
  }
`;
const Button = forwardRef((props, ref) => {
  if (props.to) {
    return (
      <Link to={props.to}>
        <Container {...props} ref={ref}>
          {props.icon}
          {props.children}
        </Container>
      </Link>
    );
  }
  return (
    <Container {...props} ref={ref}>
      {props.icon}
      {props.children}
    </Container>
  );
});
export default Button;
