import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// EXTRA
import Tooltip from "../Shared/Tooltip.jsx";
import { toggleMobileMenu } from "../../store/ui-slice";

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
  const { showMobileMenu, isDarkTheme } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const onClickHandler = e => {
    if (showMobileMenu) {
      dispatch(toggleMobileMenu());
    }
  };

  if (to) {
    return (
      <Tooltip title={text}>
        <NavLink
          to={to}
          onClick={onClickHandler}
          style={({ isActive }) =>
            isActive ? { width: "100%", backgroundColor: isDarkTheme ? "#373737" : "#f5f5f5" } : { width: "100%" }
          }
        >
          <Container forMainMenu={forMainMenu}>
            {icon}
            <Text forMainMenu={forMainMenu}>{text}</Text>
          </Container>
        </NavLink>
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
