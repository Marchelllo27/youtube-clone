import { Form } from "formik";
import styled from "styled-components";
import { useSelector } from "react-redux";
// MUI
import CircularProgress from "@mui/material/CircularProgress";
// EXTRA
import CustomInput from "../Shared/CustomInput";
import Title from "./Title";
import ChangeMode from "./ChangeMode";
import Button from "../Shared/Button";
import googleIcon from "../../assets/googleIcon2.png";
import Hr from "../Shared/Hr";

const ErrorMessage = styled.small`
  display: block;
  color: var(--color-error);
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  display: block;
  margin: auto;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  width: 5rem;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: #555555;
    color: white;
  }
`;

const Or = styled.h2`
  margin: 1rem;
`;

const GoogleButton = styled(Button)`
  background-color: ${({ theme }) => theme.soft};
  border: none;
  color: ${({ theme }) => theme.text};
  margin: 0 auto 2rem;
`;

const GoogleIcon = styled.img`
  width: 24px;
`;

const Spinner = styled(CircularProgress)`
  &.MuiCircularProgress-root {
    height: 12px !important;
    width: 12px !important;
    color: ${({ theme }) => theme.text};
  }
`;

const Container = ({ setShowLoginForm, showLoginForm, formActions, error, signWithGoogle }) => {
  const { isDarkTheme } = useSelector(state => state.ui);

  const title = showLoginForm ? "Login" : "Sign In";
  const buttonText = showLoginForm ? "Login" : "Sign In";
  return (
    <Form>
      <Title title={title} subtitle="to continue to MaraTube" />

      {error && <ErrorMessage>{error.data?.message}</ErrorMessage>}

      <CustomInput id="username" type="text" name="username" placeholder="username" />

      {!showLoginForm && <CustomInput id="email" type="email" name="email" placeholder="email" />}

      <CustomInput id="password" type="password" name="password" placeholder="password" />

      {!showLoginForm && (
        <CustomInput id="confirmPassword" type="password" name="confirmPassword" placeholder="confirm password" />
      )}

      <SubmitButton type="submit" isDarkTheme={isDarkTheme} disabled={formActions.isSubmitting}>
        {formActions.isSubmitting ? <Spinner /> : buttonText}
      </SubmitButton>

      <Or>Or</Or>

      <GoogleButton type="button" onClick={signWithGoogle}>
        <GoogleIcon src={googleIcon} alt="google logo." />
        {showLoginForm ? "Login" : "Register"} with GOOGLE
      </GoogleButton>

      <Hr style={{ width: "200px", margin: "0 auto" }} />

      <ChangeMode resetForm={formActions.resetForm} showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} />
    </Form>
  );
};
export default Container;
