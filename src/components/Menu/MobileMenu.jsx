import styled from "styled-components";
// EXTRA
import MainMenu from "./MainMenu";
import { Box } from "../Header/Header";
import Logo from "../Header/Logo";
import HamburgerMenu from "../Header/HamburgerMenu";

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: var(--main-menu-width);
  height: 100vh;
  z-index: 2000;
`;

const Header = styled.header`
  height: var(--header-height);
  width: var(--main-menu-width);
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 0 1rem;
  display: flex;
`;

const MobileMenu = () => {
  return (
    <Container>
      <Header>
        <Box>
          <HamburgerMenu />
          <Logo />
        </Box>
      </Header>
      <MainMenu />
    </Container>
  );
};
export default MobileMenu;
