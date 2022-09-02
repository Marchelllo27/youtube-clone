import styled from "styled-components";
// MUI
import useMediaQuery from "@mui/material/useMediaQuery";
// EXTRA
import Logo from "./Logo";
import Actions from "./Actions";
import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";

const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 0 1rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  min-width: fit-content;
  gap: 1.7rem;
  margin-left: 0.7rem;
`;

const Header = () => {
  const forTabletsAndHigher = useMediaQuery("(min-width:30rem)");
  const userIsLoggedIn = true;

  return (
    <Container>
      <Box>
        <HamburgerMenu />
        <Logo />
      </Box>
      {forTabletsAndHigher && <SearchBar />}
      <Actions userIsLoggedIn={userIsLoggedIn} />
    </Container>
  );
};
export default Header;
