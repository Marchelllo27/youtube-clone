import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// MUI
import { useMediaQuery } from "@mui/material";
// EXTRA
import MobileMenu from "./MobileMenu";
import LittleMenu from "./LittleMenu";
import MainMenu from "./MainMenu";
import { toggleMainMenu, toggleSmallMenu } from "../../store/ui-slice";

const Menu = () => {
  const { mainMenuIsOpen, smallMenuIsOpen } = useSelector(state => state.ui);

  const dispatch = useDispatch();

  const bigScreens = useMediaQuery("(min-width:80rem)", { noSsr: true });
  const mediumScreens = useMediaQuery("(min-width:48rem) and (max-width:79.99rem)", { noSsr: true });

  useEffect(() => {
    if (bigScreens) {
      dispatch(toggleMainMenu());
    }

    if (!bigScreens && mainMenuIsOpen) {
      dispatch(toggleMainMenu());
    }
  }, [bigScreens]);

  useEffect(() => {
    if (mediumScreens && !smallMenuIsOpen) {
      dispatch(toggleSmallMenu());
    }
    if (!mediumScreens && smallMenuIsOpen) {
      dispatch(toggleSmallMenu());
    }
  }, [mediumScreens]);

  return (
    <>
      <MobileMenu />
      {smallMenuIsOpen && <LittleMenu />}
      {mainMenuIsOpen && <MainMenu />}
    </>
  );
};
export default Menu;
