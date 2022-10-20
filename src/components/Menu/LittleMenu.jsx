import { useSelector } from "react-redux";
import styled from "styled-components";
// EXTRA
import MenuItems from "./MenuItems";

const Container = styled.aside`
  position: fixed;
  top: var(--header-height);
  left: 0;
  display: ${({ hideSmallMenu }) => hideSmallMenu && "none"};
  background-color: ${({ theme }) => theme.bgLighter};
  width: var(--little-menu-width);
  height: 100vh;
  padding: 0.6rem 0;
`;

const LittleMenu = () => {
  const { showMobileMenu } = useSelector(state => state.ui);

  return (
    <Container hideSmallMenu={showMobileMenu}>
      <MenuItems />
    </Container>
  );
};

export default LittleMenu;
