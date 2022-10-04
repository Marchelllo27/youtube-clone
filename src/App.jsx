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
import NotificationBar from "./components/Shared/NotificationBar";

const Main = styled.main`
  min-height: calc(100vh - var(--header-height));
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

let initialRender = true;

const App = () => {
  const { isDarkTheme, showMobileMenu, showNotification } = useSelector(state => state.ui);
  const { tokenExpireDate, user } = useSelector(state => state.auth);
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
  }, [tokenExpireDate, dispatch]);

  // IF USER or TokenExpire CHANGED(for example user has been subscribe), SAVE IT TO LOCALSTORAGE
  useEffect(() => {
    if (initialRender) {
      initialRender = false;
      return;
    }

    if (user && tokenExpireDate) {
      localStorage.removeItem("userInfo");
      localStorage.setItem("userInfo", JSON.stringify({ ...user, tokenExpireDate }));
    }
  }, [user, tokenExpireDate]);

  return (
    <>
      <GlobalCss hideSCrollbar={showMobileMenu} />
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Header />
        <Main>
          <Menu />
          <Content />
          {showNotification && <NotificationBar />}
        </Main>
      </ThemeProvider>
    </>
  );
};

export default App;
