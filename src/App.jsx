import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";

// EXTRA
import Home from "./pages/Home";
import Trend from "./pages/Trend";
import Sub from "./pages/Sub";
import Auth from "./pages/Auth";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header/Header";
import LittleMenu from "./components/Menu/LittleMenu";
import MainMenu from "./components/Menu/MainMenu";
import { darkTheme, lightTheme } from "./utils/theme";

const Main = styled.main`
  min-height: calc(100vh - var(--header-hight));
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Content = styled.section`
  flex: 1;
  padding: 2rem;
  margin-left: ${props =>
    props.smallMenu ? "var(--little-menu-width)" : props.mainMenu ? "var(--main-menu-width)" : "0"};
`;

const App = () => {
  const { mainMenuIsOpen, smallMenuIsOpen, isDarkTheme } = useSelector(state => state.ui);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Header />
      <Main>
        <LittleMenu />
        <MainMenu />
        <Content smallMenu={smallMenuIsOpen} mainMenu={mainMenuIsOpen}>
          <Routes>
            <Route path="/" element={<Home type="random" />} />
            <Route path="/trend" element={<Trend type="trend" />} />
            <Route path="/sub" element={<Sub type="sub" />} />
            <Route path="/auth" element={<Auth />} />

            {/* If Any path matches */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Content>
      </Main>
    </ThemeProvider>
  );
};

export default App;
