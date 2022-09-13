import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 4px;
  margin-bottom: 1rem;
  outline: none;
  color: white;
  font-size: 1rem;
`;

const CustomInput = props => {
  return <Input {...props} />;
};
export default CustomInput;
