import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
// EXTRA
import Form from "../components/Auth/Form";
import validationSchema, { loginSchemaValidation } from "../validation/auth-validation";
import Details from "../components/Auth/Details";
import { useAuthUserMutation } from "../api/endpoints/auth";
import { loginUser } from "../store/auth-slice";
import { openNotification } from "../store/ui-slice";

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

const Auth = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const dispatch = useDispatch();

  const [startAuthRequest, { error }] = useAuthUserMutation();

  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

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

    if (response.data?.user?.token) {
      dispatch(loginUser(response.data.user));
      actions.resetForm();
      dispatch(openNotification({ text: "Successfully logged in!", status: "success" }));
      navigate("/", { replace: true });
    }
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={submitFormHandler}
        validationSchema={showLoginForm ? loginSchemaValidation : validationSchema}
      >
        {formActions => (
          <Form
            showLoginForm={showLoginForm}
            setShowLoginForm={setShowLoginForm}
            formActions={formActions}
            error={error}
          />
        )}
      </Formik>
      <Details />
    </Container>
  );
};
export default Auth;
