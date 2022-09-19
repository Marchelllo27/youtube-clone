import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
// MUI
import CircularProgress from "@mui/material/CircularProgress";
// EXTRA
import CustomInput from "../components/Shared/CustomInput";
import Title from "../Auth/Title";
import Hr from "../components/Shared/Hr";
import validationSchema, { loginSchemaValidation } from "../validation/auth-validation";
import Details from "../Auth/Details";
import { useAuthUserMutation } from "../api/endpoints/auth";
import { removeUser, setUser } from "../store/auth-slice";

const Container = styled.div`
  position: relative;
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

const Box = styled.div`
  margin: 1rem 0 0.5rem;
  position: relative;
  width: 100%;
  @media (min-width: 400px) {
    margin-top: 2rem;
  }
`;

const RequestErrorMessage = styled.small`
  display: block;
  color: var(--color-error);
  margin-bottom: 1rem;
  @media (min-width: 400px) {
    position: absolute;
    top: -25px;
    left: 50%;
    translate: -50% 0;
    width: 100%;
  }
`;

const ChangeMode = styled.small`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.textSoft};
  cursor: pointer;
`;

const Spinner = styled(CircularProgress)`
  &.MuiCircularProgress-root {
    height: 12px !important;
    width: 12px !important;
    color: ${({ theme }) => theme.text};
  }
`;

const Auth = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const { isDarkTheme } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const [startAuthRequest, { error }] = useAuthUserMutation();

  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const title = showLoginForm ? "Login" : "Sign In";
  const buttonText = showLoginForm ? "Login" : "Sign In";

  const submitFormHandler = async (values, actions) => {
    let userData;
    let path;
    if (showLoginForm) {
      userData = {
        name: values.username,
        password: values.password,
      };
      path = "login";
    } else {
      userData = {
        name: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      path = "signup";
    }

    const response = await startAuthRequest({ userData, path });
    console.log(response);

    if (response.data?.user?.token) {
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      dispatch(setUser(response.data.user));
      actions.resetForm();
      navigate("/", { replace: true });
    }
  };

  const changeModeHandler = (setErrors, validateField) => {
    if (!showLoginForm) {
      setErrors({});
    }

    validateField("password");

    setShowLoginForm(prev => !prev);
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={submitFormHandler}
        validationSchema={showLoginForm ? loginSchemaValidation : validationSchema}
      >
        {({ isSubmitting, isValid, setErrors, validateField }) => {
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

              <Box>
                {error && <RequestErrorMessage>{error.data?.message || "Something went wrong"}</RequestErrorMessage>}
                <Hr style={{ width: "200px", margin: "0 auto" }} />
              </Box>

              <ChangeMode onClick={changeModeHandler.bind(null, setErrors, validateField)}>
                {showLoginForm ? "Don't have an account yet?" : "Already have an account?"}
              </ChangeMode>
            </Form>
          );
        }}
      </Formik>
      <Details />
    </Container>
  );
};
export default Auth;
