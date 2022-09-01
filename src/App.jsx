import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
// EXTRA
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";
import { darkTheme, lightTheme } from "./utils/theme";
import { toggleMainMenu } from "./store/ui-slice";

const Main = styled.main`
  min-height: calc(100vh - var(--header-height));
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const App = () => {
  const { mainMenuIsOpen, isDarkTheme, showMobileMenu } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const bigScreens = useMediaQuery("(min-width:80rem)", { noSsr: true });

  useEffect(() => {
    if (bigScreens) {
      dispatch(toggleMainMenu());
    }

    if (!bigScreens && mainMenuIsOpen && !showMobileMenu) {
      dispatch(toggleMainMenu());
    }
  }, [bigScreens]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Header />

      <Main>
        <Menu />
        <Content />
      </Main>
    </ThemeProvider>
  );
};

export default App;
