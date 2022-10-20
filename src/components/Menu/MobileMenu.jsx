import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
// EXTRA
import MainMenu from "./MainMenu";
import { Box } from "../Header/Header";
import Logo from "../Header/Logo";
import HamburgerMenu from "../Header/HamburgerMenu";
import Backdrop from "../Shared/Backdrop";
import { closeMobileMenu } from "../../store/ui-slice";
import CustomCreatePortal from "../Shared/CustomCreatePortal";

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: var(--main-menu-width);

  background-color: grey;
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
  width: 100%;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 0 1rem;
  display: flex;
`;

const MobileMenu = ({ show }) => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  const MobMenu = (
    <CSSTransition in={show} timeout={150} classNames="fade" mountOnEnter unmountOnExit nodeRef={containerRef}>
      <Container ref={containerRef}>
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

  const onBackdropClick = () => {
    dispatch(closeMobileMenu());
  };

  return (
    <>
      <Backdrop show={show} onClick={onBackdropClick} />
      <CustomCreatePortal component={MobMenu} id="modal-root" />
    </>
  );
};
export default MobileMenu;
