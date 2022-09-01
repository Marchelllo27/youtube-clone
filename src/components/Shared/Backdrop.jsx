import ReactDOM from "react-dom";
import { useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// EXTRA
import { toggleMobileMenu } from "../../store/ui-slice";
import { CSSTransition } from "react-transition-group";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  z-index: 1000;
`;

const Backdrop = () => {
  const dispatch = useDispatch();
  const { showMobileMenu } = useSelector(state => state.ui);
  const clickBackdropHandler = () => {
    dispatch(toggleMobileMenu());
  };
  const backdropRef = useRef();

  const element = (
    <CSSTransition
      in={showMobileMenu}
      timeout={2000}
      classNames={{ enterActive: "open-backdrop", exitActive: "hide-backdrop" }}
      nodeRef={backdropRef}
      mountOnEnter
      unmountOnExit
    >
      <Container onClick={clickBackdropHandler} ref={backdropRef} />
    </CSSTransition>
  );

  return ReactDOM.createPortal(element, document.getElementById("overlay-root"));
};
export default Backdrop;
