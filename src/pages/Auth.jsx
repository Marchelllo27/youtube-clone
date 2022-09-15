import { useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
// EXTRA
import { useSelector } from "react-redux";
import CustomInput from "../components/Shared/CustomInput";
import Title from "../Auth/Title";
import Hr from "../components/Shared/Hr";
import validationSchema, { loginSchemaValidation } from "../validation/auth-validation";

const Container = styled.div`
  width: 90%;
  max-width: 30rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 4px;
  box-shadow: ${({ isDarkTheme }) => !isDarkTheme && "1px 1px 3px rgba(0, 0, 0, 0.2)"};
  text-align: center;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: #555555;
    color: white;
  }
`;

const ChangeMode = styled.small`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.textSoft};
  cursor: pointer;
`;

const Spinner = styled(CircularProgress)`
  &.MuiCircularProgress-root {
    height: 1rem !important;
    width: 1rem !important;
    color: ${({ theme }) => theme.text};
  }
`;

const Auth = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { isDarkTheme } = useSelector(state => state.ui);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const title = showLoginForm ? "Login" : "Sign In";
  const buttonText = showLoginForm ? "Login" : "Sign In";

  const submitFormHandler = async (values, actions) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (showLoginForm) {
      const userCredentials = {
        name: values.username,
        password: values.password,
      };
      console.log(userCredentials);
    } else {
      const userInfo = {
        name: values.username,
        email: values.email,
        password: values.password,
      };
      console.log(userInfo);
    }

    actions.resetForm();
  };

  const changeModeHandler = () => {
    setShowLoginForm(prev => !prev);
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={submitFormHandler}
        validationSchema={showLoginForm ? loginSchemaValidation : validationSchema}
      >
        {({ isSubmitting, isValid }) => {
          return (
            <Form>
              <Title title={title} subtitle="to continue to MaraTube" />
              <CustomInput id="username" type="text" name="username" placeholder="username" />

              {!showLoginForm && <CustomInput id="email" type="email" name="email" placeholder="email" />}

              <CustomInput id="password" type="password" name="password" placeholder="password" />

              {!showLoginForm && (
                <CustomInput
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                />
              )}

              <Button type="submit" isDarkTheme={isDarkTheme} disabled={isSubmitting || !isValid}>
                {isSubmitting ? <Spinner /> : buttonText}
              </Button>

              <Hr style={{ width: "200px", margin: " 2rem auto 0.5rem" }} />

              <ChangeMode onClick={changeModeHandler}>
                {showLoginForm ? "Don't have an account yet?" : "Already have an account?"}
              </ChangeMode>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};
export default Auth;
