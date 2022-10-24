// EXTRA
import CustomCreatePortal from "../Shared/CustomCreatePortal";
import SearchBar from "./SearchBar";

const MobileSearchBar = ({ setShowSearchBar }) => {
  return (
    <CustomCreatePortal component={<SearchBar forMobile={true} showSearchBar={setShowSearchBar} />} id="modal-root" />
  );
};
export default MobileSearchBar;
