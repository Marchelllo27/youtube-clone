import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";

// EXTRA
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";
import { darkTheme, lightTheme } from "./utils/theme";
import GlobalCss from "./global.css";
import { logoutUser } from "./store/auth-slice";

const Main = styled.main`
  min-height: calc(100vh - var(--header-height));
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const App = () => {
  const { isDarkTheme, showMobileMenu } = useSelector(state => state.ui);
  const { tokenExpireDate } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // LISTENER IF STILL VALID TOKEN SET TIMEOUT TO LOGOUT AFTER TIMEOUT
  useEffect(() => {
    let remainingTime;
    let timer;
    const tokenExpires = new Date(tokenExpireDate).getTime();

    if (tokenExpires > Date.now()) {
      remainingTime = tokenExpires - Date.now();

      timer = setTimeout(() => {
        dispatch(logoutUser());
      }, remainingTime);
    }

    return () => {
      if (timer) {
        console.log("cleared!");
        clearTimeout(timer);
      }
    };
  }, [tokenExpireDate]);

  return (
    <>
      <GlobalCss hideSCrollbar={showMobileMenu} />
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Header />
        <Main>
          <Menu />
          <Content />
        </Main>
      </ThemeProvider>
    </>
  );
};

export default App;
