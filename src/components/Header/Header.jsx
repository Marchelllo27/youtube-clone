import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// MUI
import useMediaQuery from "@mui/material/useMediaQuery";
// EXTRA
import Logo from "./Logo";
import Actions from "./Actions";
import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";

const Container = styled.header`
  position: fixed;
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
  z-index: 1000;
  /* don't allow jump header when the scroll is hidden */
  /* padding-right: ${({ hideScrollbar }) => hideScrollbar && "calc(1rem + var(--scrollbar-width))"}; */
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  min-width: fit-content;
  gap: 1.7rem;
  margin-left: 0.7rem;
`;

const Header = () => {
  const { showMobileMenu } = useSelector(state => state.ui);

  const forTabletsAndHigher = useMediaQuery("(min-width:30rem)");

  return (
    <Container hideScrollbar={showMobileMenu}>
      <Box>
        <HamburgerMenu />
        <Logo />
      </Box>
      {forTabletsAndHigher && <SearchBar />}
      <Actions />
    </Container>
  );
};
export default React.memo(Header);
