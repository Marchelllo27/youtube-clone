import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import styled from "styled-components";
// EXTRA
import MainMenu from "./MainMenu";
import { Box } from "../Header/Header";
import Logo from "../Header/Logo";
import HamburgerMenu from "../Header/HamburgerMenu";
import Backdrop from "../Shared/Backdrop";

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: -(var(--main-menu-width));
  width: var(--main-menu-width);
  height: 100vh;
  z-index: 1200;
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
  const { showMobileMenu } = useSelector(state => state.ui);

  const MobMenu = showMobileMenu && (
    <Container>
      <Header>
        <Box>
          <HamburgerMenu />
          <Logo />
        </Box>
      </Header>
      <MainMenu mobileVersion />
    </Container>
  );
  return (
    <>
      {showMobileMenu && <Backdrop />}
      {ReactDOM.createPortal(MobMenu, document.getElementById("modal-root"))}
    </>
  );
};
export default MobileMenu;
