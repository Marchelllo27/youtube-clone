import styled from "styled-components";
// EXTRA
import MenuItems from "./MenuItems";

const Container = styled.aside`
  position: fixed;
  top: var(--header-height);
  left: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  width: var(--little-menu-width);
  height: 100vh;
  padding: 0.6rem 0;
`;

const LittleMenu = () => {
  return (
    <Container>
      <MenuItems />
    </Container>
  );
};

export default LittleMenu;
