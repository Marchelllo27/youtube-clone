import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// MUI
import { useMediaQuery } from "@mui/material";
// EXTRA
import MobileMenu from "./MobileMenu";
import LittleMenu from "./LittleMenu";
import MainMenu from "./MainMenu";
import {
  closeMainMenu,
  closeMobileMenu,
  closeSmallMenu,
  openMainMenu,
  openMobileMenu,
  openSmallMenu,
} from "../../store/ui-slice";

const Menu = () => {
  const { mainMenuIsOpen, smallMenuIsOpen, showMobileMenu } = useSelector(state => state.ui);

  const dispatch = useDispatch();

  const bigScreens = useMediaQuery("(min-width:80rem)", { noSsr: true });
  const mediumScreens = useMediaQuery("(min-width:48rem) and (max-width: 79.99rem)", { noSsr: true });

  useEffect(() => {
    if (mediumScreens) {
      dispatch(openSmallMenu());
    }

    if (bigScreens) {
      showMobileMenu && dispatch(closeMobileMenu());
      dispatch(openMainMenu());
      console.log("BIG SCREEN FIRED 111111111111");
    }

    if (!bigScreens) {
      mainMenuIsOpen && dispatch(closeMainMenu());
    }

    if (!mediumScreens) {
      smallMenuIsOpen && dispatch(closeSmallMenu());
    }
  }, [mediumScreens, bigScreens, dispatch, mainMenuIsOpen, smallMenuIsOpen, showMobileMenu]);

  return (
    <>
      <MobileMenu show={showMobileMenu} />
      {smallMenuIsOpen && <LittleMenu />}
      {mainMenuIsOpen && <MainMenu />}
    </>
  );
};
export default Menu;
