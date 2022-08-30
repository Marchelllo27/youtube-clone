import { Link } from "react-router-dom";
import styled from "styled-components";
// EXTRA
import Tooltip from "../Shared/Tooltip.jsx";

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

const MenuItem = ({ text, icon, to, tooltipTitle, forMainMenu, onClick }) => {
  if (to) {
    return (
      <Tooltip title={tooltipTitle}>
        <Link to={to} style={{ width: "100%" }}>
          <Container forMainMenu={forMainMenu}>
            {icon}
            <Text forMainMenu={forMainMenu}>{text}</Text>
          </Container>
        </Link>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={tooltipTitle}>
      <Container forMainMenu={forMainMenu} onClick={onClick}>
        {icon}
        <Text forMainMenu={forMainMenu}>{text}</Text>
      </Container>
    </Tooltip>
  );
};
export default MenuItem;
