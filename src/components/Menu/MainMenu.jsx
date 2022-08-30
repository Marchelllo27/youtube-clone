import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// MUI
import useMediaQuery from "@mui/material/useMediaQuery";
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
import { openMainMenu, closeMainMenu, toggleTheme } from "../../store/ui-slice";
import Login from "./Login";

const Container = styled.aside`
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: var(--main-menu-width);
  height: 100vh;
  padding: 0.6rem 0;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.bgLighter};

  /* SCROLL BAR */

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0.5rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #202020;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: #202020;
    border-radius: 5px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: #555555;
  }
`;

const MenuLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.soft};
  margin: 1rem 0;
  border: none;
`;

const MainMenu = () => {
  const { mainMenuIsOpen, isDarkTheme } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const bigScreens = useMediaQuery("(min-width:80rem)", { noSsr: true });

  useEffect(() => {
    if (bigScreens) {
      dispatch(openMainMenu());
    }

    if (!bigScreens) {
      dispatch(closeMainMenu());
    }
  }, [bigScreens]);

  const themeModeHandler = () => {
    dispatch(toggleTheme());
  };

  if (mainMenuIsOpen) {
    return (
      <Container>
        <MenuLinks>
          <MenuItem text="Home" icon={<HomeIcon />} to="/" tooltipTitle="Home" forMainMenu />
          <MenuItem text="Explore" icon={<ExploreOutlinedIcon />} to="/trend" tooltipTitle="Explore" forMainMenu />
          <MenuItem
            text="Subscriptions"
            icon={<SubscriptionsOutlinedIcon />}
            to="/sub"
            tooltipTitle="Subscriptions"
            forMainMenu
          />
          <MenuItem text="Originals" icon={<YouTubeIcon />} to="/" tooltipTitle="Originals" forMainMenu />
          <MenuItem text="MarkTube Music" icon={<QueueMusicIcon />} to="/" tooltipTitle="MarkTube Music" forMainMenu />

          <Hr />

          <MenuItem text="Library" icon={<LibraryBooksIcon />} to="/" tooltipTitle="Library" forMainMenu />
          <MenuItem text="History" icon={<HistoryOutlinedIcon />} to="/history" tooltipTitle="History" forMainMenu />
          <MenuItem
            text="Your videos"
            icon={<PlayCircleOutlineIcon />}
            to="/yours"
            tooltipTitle="Your videos"
            forMainMenu
          />
          <MenuItem text="Downloads" icon={<DownloadIcon />} to="/" tooltipTitle="Downloads" forMainMenu />

          <Hr />

          <Login />
        </MenuLinks>

        <Hr />

        <Subscriptions />

        <Hr />
        <MenuLinks>
          <MenuItem
            text={isDarkTheme ? "Light Mode" : "Dark Mode"}
            icon={isDarkTheme ? <WbSunnyIcon /> : <NightlightRoundIcon />}
            tooltipTitle={isDarkTheme ? "Light Mode" : "Dark Mode"}
            onClick={themeModeHandler}
            forMainMenu
          />
          <MenuItem text="Settings" icon={<SettingsIcon />} to="/settings" tooltipTitle="Settings" forMainMenu />
          <MenuItem text="Help" icon={<HelpIcon />} to="/help" tooltipTitle="Help" forMainMenu />
          <MenuItem
            text="Send feedback"
            icon={<FeedbackIcon />}
            to="/feedback"
            tooltipTitle="Send feedback"
            forMainMenu
          />
        </MenuLinks>
      </Container>
    );
  }
  return null;
};
export default MainMenu;
