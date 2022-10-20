import { useDispatch, useSelector } from "react-redux";
// MUI
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
// EXTRA
import CustomToolTip from "../Shared/Tooltip";
import { closeMainMenu, closeMobileMenu, openMobileMenu } from "../../store/ui-slice";

const HamburgerMenu = () => {
  const { showMobileMenu, mainMenuIsOpen, smallMenuIsOpen } = useSelector(state => state.ui);
  const needToOpenMobileMenu = useMediaQuery("(max-width: 80rem", { noSsr: true });
  const dispatch = useDispatch();

  const openMenuHandler = () => {
    if (needToOpenMobileMenu) {
      dispatch(openMobileMenu());
    }

    if (!needToOpenMobileMenu) {
      mainMenuIsOpen && dispatch(closeMainMenu());
    }

    if (showMobileMenu) {
      dispatch(closeMobileMenu());
    }
  };

  return (
    <CustomToolTip title="Menu">
      <MenuIcon style={{ cursor: "pointer" }} onClick={openMenuHandler} />
    </CustomToolTip>
  );
};
export default HamburgerMenu;
