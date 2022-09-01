import { useSelector } from "react-redux";
// EXTRA
import MobileMenu from "./MobileMenu";
import LittleMenu from "./LittleMenu";
import MainMenu from "./MainMenu";

const Menu = () => {
  const { mainMenuIsOpen } = useSelector(state => state.ui);

  return (
    <>
      <MobileMenu />
      <LittleMenu />
      {mainMenuIsOpen && <MainMenu />}
    </>
  );
};
export default Menu;
