import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
// MUI
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import DownloadIcon from "@mui/icons-material/Download";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
// EXTRA
import MenuItem from "./MenuItem";
import Subscriptions from "./Subscriptions";
import { toggleTheme, toggleMainMenu } from "../../store/ui-slice";
import Hr from "../Shared/Hr";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Container = styled.aside`
  position: ${props => (props.mobileVersion ? "static" : "fixed")};
  top: var(--header-height);
  left: 0;
  width: var(--main-menu-width);
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

const MenuLinks = styled.ul`
  display: flex;
  flex-direction: column;
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
  const { isAuthenticated } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const themeModeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <Container darkMode={isDarkTheme} mobileVersion={mobileVersion}>
      <MenuLinks>
        <MenuItem text="Home" icon={<HomeIcon />} to="/" forMainMenu />
        <MenuItem text="Explore" icon={<ExploreOutlinedIcon />} to="/trend" forMainMenu />
        <MenuItem text="Subscriptions" icon={<SubscriptionsOutlinedIcon />} to="/sub" forMainMenu />
        <MenuItem text="Originals" icon={<YouTubeIcon />} to="/originals" tooltipTitle="Originals" forMainMenu />
        <MenuItem text="MarkTube Music" icon={<QueueMusicIcon />} to="/music" forMainMenu />
        <Hr />
        <MenuItem text="Library" icon={<LibraryBooksIcon />} to="/library" tooltipTitle="Library" forMainMenu />
        <MenuItem text="History" icon={<HistoryOutlinedIcon />} to="/history" tooltipTitle="History" forMainMenu />
        <MenuItem text="Your videos" icon={<PlayCircleOutlineIcon />} to="/yours" forMainMenu />
        <MenuItem text="Downloads" icon={<DownloadIcon />} to="/downloads" forMainMenu />
        <Hr />
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && <LogoutButton />}
      </MenuLinks>
      <Hr />
      <Subscriptions />
      <Hr />
      <MenuLinks>
        <MenuItem
          text={isDarkTheme ? "Light Mode" : "Dark Mode"}
          icon={isDarkTheme ? <WbSunnyIcon /> : <NightlightRoundIcon />}
          onClick={themeModeHandler}
          forMainMenu
        />
        <MenuItem text="Settings" icon={<SettingsIcon />} to="/settings" forMainMenu />
        <MenuItem text="Help" icon={<HelpIcon />} to="/help" forMainMenu />
        <MenuItem text="Send feedback" icon={<FeedbackIcon />} to="/feedback" forMainMenu />
      </MenuLinks>

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
