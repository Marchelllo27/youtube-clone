import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// MUI
import { useMediaQuery } from "@mui/material";
// EXTRA
import MobileMenu from "./MobileMenu";
import LittleMenu from "./LittleMenu";
import MainMenu from "./MainMenu";
import { toggleMainMenu } from "../../store/ui-slice";

const Menu = () => {
  const { mainMenuIsOpen } = useSelector(state => state.ui);

  const dispatch = useDispatch();

  const bigScreens = useMediaQuery("(min-width:80rem)", { noSsr: true });

  useEffect(() => {
    if (bigScreens) {
      dispatch(toggleMainMenu());
    }

    if (!bigScreens && mainMenuIsOpen) {
      dispatch(toggleMainMenu());
    }
  }, [bigScreens]);

  return (
    <>
      <MobileMenu />
      <LittleMenu />
      {mainMenuIsOpen && <MainMenu />}
    </>
  );
};
export default Menu;
