import { useState } from "react";
import styled from "styled-components";
// MUI
import SearchIcon from "@mui/icons-material/Search";
// EXTRA
import CustomTooltip from "../Shared/Tooltip";

const Container = styled.form`
  display: flex;
  width: 100%;
  max-width: 40rem;
  margin: 0 1.5rem;
`;
const SearchInput = styled.input`
  width: calc(100% - 4rem);
  border: 1px solid ${({ theme }) => theme.soft};
  background-color: ${({ theme }) => theme.bg};
  padding: 0.5rem;
  outline: none;
  color: ${({ theme }) => theme.text};
`;
const Icon = styled.button`
  width: 4rem;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
`;

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const onClickSearchButton = e => {
    e.preventDefault();
    console.log("Search " + searchValue);
  };

  return (
    <Container>
      <SearchInput
        name="searchbar"
        id="searchbar"
        placeholder="Search"
        onChange={e => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <CustomTooltip title="Search videos">
        <Icon onClick={onClickSearchButton}>
          <SearchIcon />
        </Icon>
      </CustomTooltip>
    </Container>
  );
};
export default SearchBar;
