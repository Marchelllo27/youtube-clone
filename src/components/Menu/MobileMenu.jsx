import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
// MUI
import { useMediaQuery } from "@mui/material";
// EXTRA
import MainMenu from "./MainMenu";
import { Box } from "../Header/Header";
import Logo from "../Header/Logo";
import HamburgerMenu from "../Header/HamburgerMenu";
import Backdrop from "../Shared/Backdrop";
import { toggleMobileMenu } from "../../store/ui-slice";

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: var(--main-menu-width);
  height: 100vh;
  z-index: 1200;

  &.fade-enter-active {
    animation: openMenu 0.15s ease-in forwards;
  }

  &.fade-exit-active {
    animation: closeMenu 0.15s ease-in forwards;
  }

  @keyframes openMenu {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes closeMenu {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
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
  const isBigScreens = useMediaQuery("(min-width: 80rem)", { noSsr: true });
  const reference = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isBigScreens && showMobileMenu) {
      dispatch(toggleMobileMenu());
    }
  }, [isBigScreens]);
  const MobMenu = (
    <CSSTransition in={showMobileMenu} timeout={150} classNames="fade" mountOnEnter unmountOnExit nodeRef={reference}>
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
      <Backdrop />
      {ReactDOM.createPortal(MobMenu, document.getElementById("modal-root"))}
    </>
  );
};
export default MobileMenu;
