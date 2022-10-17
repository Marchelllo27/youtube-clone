import { useSelector } from "react-redux";
import styled from "styled-components";
// MUI
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DownloadIcon from "@mui/icons-material/Download";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
// EXTRA
import MenuItem from "./MenuItem";
import Hr from "../Shared/Hr";
import ThemeModeMenuItem from "./ThemeModeMenuItem";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Subscriptions from "./Subscriptions";

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const MenuItems = () => {
  const { mainMenuIsOpen, showMobileMenu, smallMenuIsOpen } = useSelector(state => state.ui);
  const { user } = useSelector(state => state.auth);

  const forMainMenu = showMobileMenu || mainMenuIsOpen;

  return (
    <MenuList>
      <MenuItem text="Home" icon={<HomeIcon />} to="/" tooltipTitle="Home" forMainMenu={forMainMenu} />
      <MenuItem
        text="Explore"
        icon={<ExploreOutlinedIcon />}
        to="/trend"
        tooltipTitle="Explore"
        forMainMenu={forMainMenu}
      />
      <MenuItem
        text="Subscriptions"
        icon={<SubscriptionsOutlinedIcon />}
        to="/sub"
        tooltipTitle="Subscriptions"
        forMainMenu={forMainMenu}
      />
      {user && (
        <MenuItem
          text="My videos"
          icon={<PlayCircleOutlineIcon />}
          to="/my-videos"
          tooltipTitle="My own videos"
          forMainMenu={forMainMenu}
        />
      )}
      <MenuItem
        text="Originals"
        icon={<YouTubeIcon />}
        to="/originals"
        tooltipTitle="Originals"
        forMainMenu={forMainMenu}
      />

      {(mainMenuIsOpen || showMobileMenu) && <Hr />}

      <MenuItem
        text="MarkTube Music"
        icon={<QueueMusicIcon />}
        to="/music"
        tooltipTitle="MarkTube Music"
        forMainMenu={forMainMenu}
      />
      <MenuItem
        text="Library"
        icon={<LibraryBooksIcon />}
        to="/library"
        tooltipTitle="Library"
        forMainMenu={forMainMenu}
      />
      <MenuItem
        text="Downloads"
        icon={<DownloadIcon />}
        to="/downloads"
        tooltipTitle="Downloads"
        forMainMenu={forMainMenu}
      />
      {smallMenuIsOpen && !showMobileMenu && <ThemeModeMenuItem forMainMenu={forMainMenu} />}
      {mainMenuIsOpen && (
        <MenuItem
          text="History"
          icon={<HistoryOutlinedIcon />}
          to="/history"
          tooltipTitle="History"
          forMainMenu={forMainMenu}
        />
      )}

      {(mainMenuIsOpen || showMobileMenu) && <Hr />}

      {user && (mainMenuIsOpen || showMobileMenu) && <LogoutButton />}
      {!user && (mainMenuIsOpen || showMobileMenu) && <LoginButton />}

      {(mainMenuIsOpen || showMobileMenu) && (
        <>
          <Hr />
          {user && (
            <>
              <Subscriptions />
              <Hr />
            </>
          )}

          <ThemeModeMenuItem forMainMenu={forMainMenu} />
          <MenuItem text="Settings" icon={<SettingsIcon />} to="/settings" forMainMenu={forMainMenu} />
          <MenuItem text="Help" icon={<HelpIcon />} to="/help" forMainMenu={forMainMenu} />
          <MenuItem text="Send feedback" icon={<FeedbackIcon />} to="/feedback" forMainMenu={forMainMenu} />
        </>
      )}
    </MenuList>
  );
};
export default MenuItems;
