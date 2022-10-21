import { useDispatch, useSelector } from "react-redux";
// MUI
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
// EXTRA
import CustomToolTip from "../Shared/Tooltip";
import {
  closeMainMenu,
  openMobileMenu,
  setToTrueClickedHamburgerIcon,
  openSmallMenu,
  closeSmallMenu,
  openMainMenu,
  closeMobileMenu,
} from "../../store/ui-slice";

const HamburgerMenu = () => {
  const { mainMenuIsOpen, smallMenuIsOpen, showMobileMenu } = useSelector(state => state.ui);
  const needToOpenMobileMenu = useMediaQuery("(max-width: 1279px", { noSsr: true });
  const dispatch = useDispatch();

  const openMenuHandler = () => {
    dispatch(setToTrueClickedHamburgerIcon());

    if (needToOpenMobileMenu) {
      !showMobileMenu && dispatch(openMobileMenu());
      showMobileMenu && dispatch(closeMobileMenu());
      return;
    }

    if (!needToOpenMobileMenu && mainMenuIsOpen) {
      dispatch(closeMainMenu());
      dispatch(openSmallMenu());
      return;
    }

    if (!needToOpenMobileMenu && smallMenuIsOpen) {
      dispatch(closeSmallMenu());
      dispatch(openMainMenu());
    }
  };

  return (
    <CustomToolTip title="Menu">
      <MenuIcon style={{ cursor: "pointer" }} onClick={openMenuHandler} />
    </CustomToolTip>
  );
};
export default HamburgerMenu;
