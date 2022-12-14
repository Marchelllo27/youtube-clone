import { useRef } from "react";
import styled from "styled-components";
// EXTRA
import { CSSTransition } from "react-transition-group";
import CustomCreatePortal from "./CustomCreatePortal";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ opacity }) => (opacity ? `rgba(0, 0, 0, ${opacity})` : "rgba(0, 0, 0, 0.7)")};
  cursor: pointer;
  z-index: 1000;

  &.fade-backdrop-enter-active {
    animation: showBackdrop 0.2s ease-out forwards;
  }
  &.fade-backdrop-exit-active {
    animation: hideBackdrop 0.2s ease-out forwards;
  }

  @keyframes showBackdrop {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes hideBackdrop {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;

const Backdrop = ({ show, onClick, opacity }) => {
  const backdropRef = useRef();

  const element = (
    <CSSTransition in={show} timeout={200} classNames="fade-backdrop" nodeRef={backdropRef} mountOnEnter unmountOnExit>
      <Container onClick={onClick} ref={backdropRef} opacity={opacity} />
    </CSSTransition>
  );

  return <CustomCreatePortal component={element} id="overlay-root" />;
};
export default Backdrop;
