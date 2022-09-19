import styled from "styled-components";
import { useField } from "formik";

const Container = styled.div`
  position: relative;
  margin-bottom: ${({ longError, touched }) => (longError && touched ? "0.5rem" : "2rem")};
  text-align: ${({ longError }) => longError && "left"};

  @media (min-width: 501px) {
    margin-bottom: 2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  background-color: transparent;
  border: 1px solid ${({ theme, touched, error }) => (touched && error ? "var(--color-error)" : theme.soft)};
  border-radius: 4px;
  outline: none;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 1s ease 50000s;
    -webkit-text-fill-color: ${({ theme }) => theme.text};
  }
`;

const Small = styled.small`
  color: var(--color-error);
  position: ${({ longError }) => (longError ? "static" : "absolute")};
  bottom: -1.5rem;
  left: 0;

  @media (min-width: 501px) {
    position: absolute;
  }
`;

const CustomInput = props => {
  // field gives us onBlur, onChange, value & connection with formik
  // meta gives us info about touched and errors
  const [field, meta] = useField(props);

  let longError = false;
  if (meta.error?.length > 35) {
    longError = true;
  }

  return (
    <Container longError={longError} touched={meta.touched}>
      <Input {...field} {...props} touched={meta.touched} error={meta.error} />

      {/* ERROR MESSAGE */}
      {meta.touched && meta.error && <Small longError={longError}>{meta.error}</Small>}
    </Container>
  );
};
export default CustomInput;
