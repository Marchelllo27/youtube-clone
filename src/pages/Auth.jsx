import { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
// EXTRA
import { useSelector } from "react-redux";
import CustomInput from "../components/Shared/CustomInput";
import Title from "../Auth/Title";
import Hr from "../components/Shared/Hr";

const Container = styled.div`
  width: 90%;
  max-width: 30rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 4px;
  box-shadow: ${({ isDarkTheme }) => !isDarkTheme && "1px 1px 3px rgba(0, 0, 0, 0.2)"};
  text-align: center;

  transition: height 2s ease;
`;

const SignIn = styled.form``;

const Button = styled.button`
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;

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

const Auth = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { isDarkTheme } = useSelector(state => state.ui);

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const title = showLoginForm ? "Login" : "Sign In";
  const buttonText = showLoginForm ? "Login" : "Sign In";

  const submitFormHandler = e => {
    e.preventDefault();
    console.log("Sending...");
  };

  const changeModeHandler = e => {
    setShowLoginForm(prev => !prev);
  };
  return (
    <Container>
      <Title title={title} subtitle="to continue to MaraTube" />
      <SignIn onSubmit={submitFormHandler}>
        <CustomInput id="username" type="text" name="username" placeholder="username" required />

        {!showLoginForm && <CustomInput id="email" type="email" name="email" placeholder="email" required />}

        <CustomInput id="password" type="password" name="password" placeholder="password" required />

        <Button isDarkTheme={isDarkTheme}>{buttonText}</Button>

        <Hr style={{ width: "200px", margin: " 2rem auto 0.5rem" }} />

        <ChangeMode onClick={changeModeHandler}>
          {showLoginForm ? "Don't have an account yet?" : "Already have an account?"}
        </ChangeMode>
      </SignIn>
    </Container>
  );
};
export default Auth;
