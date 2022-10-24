import { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// MUI
import SearchIcon from "@mui/icons-material/Search";
// EXTRA
import CustomTooltip from "../Shared/Tooltip";

const Container = styled.form`
  display: flex;
  position: ${({ forMobile }) => forMobile && "fixed"};
  top: ${({ forMobile }) => forMobile && "50%"};
  left: ${({ forMobile }) => forMobile && "50%"};
  transform: ${({ forMobile }) => forMobile && "translate(-50%, -50%)"};
  width: 80%;
  margin: 0 1.5rem;
  z-index: 1000;

  @media (min-width: 480px) {
    width: 100%;
    max-width: 40rem;
  }
`;
const SearchInput = styled.input`
  width: calc(100% - 4rem);
  border: 1px solid ${({ theme }) => theme.soft};
  background-color: ${({ theme }) => theme.bg};
  padding: 0.5rem;
  outline: none;
  color: ${({ theme }) => theme.text};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 1s ease 50000s;
    -webkit-text-fill-color: ${({ theme }) => theme.text};
  }
`;
const Icon = styled.button`
  width: 4rem;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
`;

const SearchBar = ({ forMobile, showSearchBar }) => {
  const searchRef = useRef();
  const navigate = useNavigate();

  const onClickSearchButton = e => {
    e.preventDefault();
    const searchQuery = searchRef.current.value;

    showSearchBar && showSearchBar(false);
    navigate(`/search-results?q=${searchQuery}`);
  };

  return (
    <Container forMobile={forMobile}>
      <SearchInput name="searchbar" id="searchbar" placeholder="Search" ref={searchRef} autoFocus />
      <CustomTooltip title="Search videos">
        <Icon onClick={onClickSearchButton}>
          <SearchIcon />
        </Icon>
      </CustomTooltip>
    </Container>
  );
};
export default SearchBar;
