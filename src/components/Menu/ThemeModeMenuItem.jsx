import { useDispatch, useSelector } from "react-redux";
// MUI
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
// EXTRA
import MenuItem from "./MenuItem";
import { toggleTheme } from "../../store/ui-slice";

const ThemeModeMenuItem = ({ forMainMenu }) => {
  const { isDarkTheme } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const themeModeHandler = () => {
    localStorage.setItem("darkTheme", !isDarkTheme);
    dispatch(toggleTheme());
  };
  return (
    <MenuItem
      text={isDarkTheme ? "Light Mode" : "Dark Mode"}
      icon={isDarkTheme ? <WbSunnyIcon /> : <NightlightRoundIcon />}
      tooltipTitle={isDarkTheme ? "Light Mode" : "Dark Mode"}
      onClick={themeModeHandler}
      forMainMenu={forMainMenu}
    />
  );
};
export default ThemeModeMenuItem;
