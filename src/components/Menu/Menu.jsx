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
  setToFalseClickedHamburgerIcon,
} from "../../store/ui-slice";

const Menu = () => {
  const { mainMenuIsOpen, smallMenuIsOpen, showMobileMenu, hamburgerIconClicked } = useSelector(state => state.ui);

  const dispatch = useDispatch();
  const bigScreens = useMediaQuery("(min-width: 1280px)", { noSsr: true });
  const mediumScreens = useMediaQuery("(min-width: 768px) and (max-width: 1279px)", { noSsr: true });

  useEffect(() => {
    if (mediumScreens && !smallMenuIsOpen) {
      !bigScreens && mainMenuIsOpen && dispatch(closeMainMenu());
      !smallMenuIsOpen && dispatch(openSmallMenu());

      dispatch(setToFalseClickedHamburgerIcon());
      return;
    }

    if (!mediumScreens && !hamburgerIconClicked) {
      smallMenuIsOpen && dispatch(closeSmallMenu());
      bigScreens && !mainMenuIsOpen && dispatch(openMainMenu());
      dispatch(setToFalseClickedHamburgerIcon());
    }

    if (bigScreens && showMobileMenu) {
      dispatch(setToFalseClickedHamburgerIcon());
      dispatch(closeMobileMenu());
    }
  }, [bigScreens, showMobileMenu, dispatch, mainMenuIsOpen, smallMenuIsOpen, mediumScreens, hamburgerIconClicked]);

  return (
    <>
      <MobileMenu show={showMobileMenu} />
      {smallMenuIsOpen && <LittleMenu />}
      {mainMenuIsOpen && <MainMenu />}
    </>
  );
};
export default Menu;
