import { useRef } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
// EXTRA
import MainMenu from "./MainMenu";
import { Box } from "../Header/Header";
import Logo from "../Header/Logo";
import HamburgerMenu from "../Header/HamburgerMenu";
import Backdrop from "../Shared/Backdrop";

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  /* left: -(var(--main-menu-width)); */
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
  const reference = useRef();
  const MobMenu = (
    <CSSTransition
      in={showMobileMenu}
      timeout={150}
      classNames={{ enter: "", enterActive: "open", exit: "", exitActive: "close" }}
      mountOnEnter
      unmountOnExit
      nodeRef={reference}
    >
      <Container ref={reference}>
        <Header>
          <Box>
            <HamburgerMenu />
            <Logo />
          </Box>
        </Header>
        <MainMenu mobileVersion />
      </Container>
    </CSSTransition>
  );
  return (
    <>
      {showMobileMenu && <Backdrop />}
      {ReactDOM.createPortal(MobMenu, document.getElementById("modal-root"))}
    </>
  );
};
export default MobileMenu;
