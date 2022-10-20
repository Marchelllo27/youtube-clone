import { useSelector } from "react-redux";
import styled from "styled-components";

// EXTRA
import Hr from "../Shared/Hr";
import MenuItems from "./MenuItems";

const Container = styled.aside`
  position: ${props => (props.mobileVersion ? "static" : "fixed")};
  top: var(--header-height);
  left: 0;
  /* width: var(--main-menu-width); */
  width: 100%;
  height: calc(100vh - var(--header-height));
  padding: 0.6rem 0;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};

  /* SCROLL BAR */

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0.5rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: ${props => (props.darkMode ? "#202020" : ({ theme }) => theme.bgLighter)};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: ${props => (props.darkMode ? "#202020" : ({ theme }) => theme.bgLighter)};
    border-radius: 5px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: ${props => (props.darkMode ? "#555555" : "#969696")};
  }

  /* FOR FIREFOX */
  @supports (scrollbar-color: red blue) {
    * {
      scrollbar-color: #555555 #202020;
    }
  }
`;

const MenuFooter = styled.footer`
  margin-left: var(--menu-item-paddingLeft);
  font-size: 0.8rem;
`;
const FooterText = styled.p`
  color: #b5b5b5;
  margin-bottom: 0.5rem;
`;
const Copyright = styled.small`
  color: grey;
`;

const MainMenu = ({ mobileVersion }) => {
  const { isDarkTheme } = useSelector(state => state.ui);

  return (
    <Container darkMode={isDarkTheme} mobileVersion={mobileVersion}>

      <MenuItems />

      <Hr />

      <MenuFooter>
        <FooterText>
          About Press Copyright <br /> Contact us Creators <br /> Advertise Developers <br /> Report hateful content
          under LCEN
        </FooterText>
        <Copyright>
          &copy; <time dateTime="2022">2022</time> Marchello.
        </Copyright>
      </MenuFooter>
    </Container>
  );
};
export default MainMenu;
