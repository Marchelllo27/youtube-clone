import { useDispatch, useSelector } from "react-redux";
// MUI
import MenuIcon from "@mui/icons-material/Menu";
// EXTRA
import CustomToolTip from "../Shared/Tooltip";
import { openMainMenu, closeMainMenu, openSmallMenu, closeSmallMenu } from "../../store/ui-slice";

const HamburgerMenu = () => {
  const { smallMenuIsOpen, mainMenuIsOpen } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const openMenuHandler = () => {
    if (mainMenuIsOpen) {
      dispatch(closeMainMenu());
      dispatch(openSmallMenu());
    }
    if (smallMenuIsOpen) {
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
