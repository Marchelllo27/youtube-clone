import ReactDOM from "react-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// EXTRA
import { toggleMobileMenu } from "../../store/ui-slice";

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

const Backdrop = ({ children }) => {
  const dispatch = useDispatch();
  const clickBackdropHandler = () => {
    dispatch(toggleMobileMenu());
  };

  return ReactDOM.createPortal(
    <Container onClick={clickBackdropHandler}>{children}</Container>,
    document.getElementById("overlay-root")
  );
};
export default Backdrop;
