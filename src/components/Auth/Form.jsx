import { Form } from "formik";
import styled from "styled-components";
import { useSelector } from "react-redux";
// MUI
import CircularProgress from "@mui/material/CircularProgress";
// EXTRA
import CustomInput from "../Shared/CustomInput";
import Title from "./Title";
import ChangeMode from "./ChangeMode";
import RequestErrorMessage from "./RequestErrorMessage";

const Button = styled.button`
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

const Spinner = styled(CircularProgress)`
  &.MuiCircularProgress-root {
    height: 12px !important;
    width: 12px !important;
    color: ${({ theme }) => theme.text};
  }
`;

const Container = ({ setShowLoginForm, showLoginForm, formActions, error }) => {
  const { isDarkTheme } = useSelector(state => state.ui);

  const title = showLoginForm ? "Login" : "Sign In";
  const buttonText = showLoginForm ? "Login" : "Sign In";
  return (
    <Form>
      <Title title={title} subtitle="to continue to MaraTube" />
      <CustomInput id="username" type="text" name="username" placeholder="username" />

      {!showLoginForm && <CustomInput id="email" type="email" name="email" placeholder="email" />}

      <CustomInput id="password" type="password" name="password" placeholder="password" />

      {!showLoginForm && (
        <CustomInput id="confirmPassword" type="password" name="confirmPassword" placeholder="confirm password" />
      )}

      <Button type="submit" isDarkTheme={isDarkTheme} disabled={formActions.isSubmitting}>
        {formActions.isSubmitting ? <Spinner /> : buttonText}
      </Button>

      <RequestErrorMessage error={error} />

      <ChangeMode resetForm={formActions.resetForm} showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} />
    </Form>
  );
};
export default Container;
