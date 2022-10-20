import { useDispatch, useSelector } from "react-redux";
// MUI
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
// EXTRA
import CustomToolTip from "../Shared/Tooltip";
import { toggleMobileMenu, toggleMainMenu, toggleSmallMenu } from "../../store/ui-slice";

const HamburgerMenu = () => {
  
  const { smallMenuIsOpen, mainMenuIsOpen } = useSelector(state => state.ui);
  const mobileView = useMediaQuery("(max-width: 80rem", { noSsr: true });
  const dispatch = useDispatch();

  const openMenuHandler = () => {
    if (mobileView) {
      dispatch(toggleMobileMenu());
      return;
    }

    if (mainMenuIsOpen) {
      dispatch(toggleMainMenu());
      dispatch(toggleSmallMenu());
      return;
    }
    if (smallMenuIsOpen) {
      dispatch(toggleMainMenu());
      dispatch(toggleSmallMenu());
      return;
    }
  };

  return (
    <CustomToolTip title="Menu">
      <MenuIcon style={{ cursor: "pointer" }} onClick={openMenuHandler} />
    </CustomToolTip>
  );
};
export default HamburgerMenu;
