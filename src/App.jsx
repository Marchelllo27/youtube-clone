import React from "react";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";

// EXTRA
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";
import { darkTheme, lightTheme } from "./utils/theme";
import GlobalCss from "./global.css";

const Main = styled.main`
  min-height: calc(100vh - var(--header-height));
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const App = () => {
  const { isDarkTheme, showMobileMenu } = useSelector(state => state.ui);

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
