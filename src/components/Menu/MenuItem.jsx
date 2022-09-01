import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// EXTRA
import Tooltip from "../Shared/Tooltip.jsx";
import { toggleMobileMenu, toggleMainMenu } from "../../store/ui-slice";

const Container = styled.li`
  display: flex;
  flex-direction: ${props => (props.forMainMenu ? "row" : "column")};
  align-items: center;
  gap: ${props => (props.forMainMenu ? "var(--menu-item-gap)" : "0.4rem")};
  width: 100%;
  padding: var(--menu-item-paddingY) 0;
  padding-left: ${props => (props.forMainMenu ? "var(--menu-item-paddingLeft)" : "0")};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Text = styled.span`
  font-size: ${props => (props.forMainMenu ? "0.8rem" : "0.6rem")};
  letter-spacing: ${props => (props.forMainMenu ? "var(--menu-item-letter-spacing)" : "0")};
  font-weight: ${props => (props.forMainMenu ? "400" : "300")};
`;

const MenuItem = ({ text, icon, to, forMainMenu, onClick }) => {
  const { showMobileMenu } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const onClickHandler = e => {
    if (showMobileMenu) {
      dispatch(toggleMobileMenu());
    }
  };

  if (to) {
    return (
      <Tooltip title={text}>
        <Link to={to} style={{ width: "100%" }} onClick={onClickHandler}>
          <Container forMainMenu={forMainMenu}>
            {icon}
            <Text forMainMenu={forMainMenu}>{text}</Text>
          </Container>
        </Link>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={text}>
      <Container forMainMenu={forMainMenu} onClick={onClick}>
        {icon}
        <Text forMainMenu={forMainMenu}>{text}</Text>
      </Container>
    </Tooltip>
  );
};
export default MenuItem;
