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
import DownloadIcon from "@mui/icons-material/Download";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
// EXTRA
import MenuItem from "./MenuItem";
import { toggleTheme, openSmallMenu, closeSmallMenu } from "../../store/ui-slice";

const Container = styled.aside`
  position: fixed;
  top: var(--header-height);
  left: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  width: var(--little-menu-width);
  height: 100vh;
  padding: 0.6rem 0;
`;

const MenuLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LittleMenu = () => {
  const { smallMenuIsOpen, isDarkTheme } = useSelector(state => state.ui);
  const dispatch = useDispatch();
  const mediumScreens = useMediaQuery("(min-width:48rem) and (max-width:80rem)", { noSsr: true });

  const themeModeHandler = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (mediumScreens) {
      dispatch(openSmallMenu());
    }
    if (!mediumScreens) {
      dispatch(closeSmallMenu());
    }
  }, [mediumScreens]);

  if (smallMenuIsOpen) {
    return (
      <Container>
        <MenuLinks>
          <MenuItem text="Home" icon={<HomeIcon />} to="/" tooltipTitle="Home" />
          <MenuItem text="Explore" icon={<ExploreOutlinedIcon />} to="/trend" tooltipTitle="Explore" />
          <MenuItem text="Subscriptions" icon={<SubscriptionsOutlinedIcon />} to="/sub" tooltipTitle="Subscriptions" />
          <MenuItem text="Originals" icon={<YouTubeIcon />} to="/originals" tooltipTitle="Originals" />
          <MenuItem text="MarkTube Music" icon={<QueueMusicIcon />} to="/music" tooltipTitle="MarkTube Music" />
          <MenuItem text="Library" icon={<LibraryBooksIcon />} to="/library" tooltipTitle="Library" />
          <MenuItem text="Downloads" icon={<DownloadIcon />} to="/downloads" tooltipTitle="Downloads" />
          <MenuItem
            text={isDarkTheme ? "Light Mode" : "Dark Mode"}
            icon={isDarkTheme ? <WbSunnyIcon /> : <NightlightRoundIcon />}
            tooltipTitle={isDarkTheme ? "Light Mode" : "Dark Mode"}
            onClick={themeModeHandler}
          />
        </MenuLinks>
      </Container>
    );
  }

  return null;
};
export default LittleMenu;
