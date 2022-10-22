import { useRef } from "react";
import styled from "styled-components";
// MUI
import SearchIcon from "@mui/icons-material/Search";
// EXTRA
import CustomTooltip from "../Shared/Tooltip";
import { useLazySearchVideosQuery } from "../../api/endpoints/video";

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
  const searchRef = useRef();
  const [startSearch, { data, isLoading, error }] = useLazySearchVideosQuery();

  const onClickSearchButton = e => {
    e.preventDefault();
    console.log(searchRef.current.value);
    startSearch(searchRef.current.value).then(data => console.log(data));
  };

  return (
    <Container>
      <SearchInput name="searchbar" id="searchbar" placeholder="Search" ref={searchRef} />
      <CustomTooltip title="Search videos">
        <Icon onClick={onClickSearchButton}>
          <SearchIcon />
        </Icon>
      </CustomTooltip>
    </Container>
  );
};
export default SearchBar;
