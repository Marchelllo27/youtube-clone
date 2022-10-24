import { useState, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// MUI
import useMediaQuery from "@mui/material/useMediaQuery";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
// EXTRA
import Button from "../Shared/Button";
import CustomToolTip from "../Shared/Tooltip";
import Upload from "../Video/Upload/Upload";
import UserAccountMenu from "../Menu/UserAccountMenu";
import MobileSearchBar from "./MobileSearchBar";
import Backdrop from "../Shared/Backdrop";

const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Actions = () => {
  const [showUserAccountMenu, setShowUserAccountMenu] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showMobileSearchBar, setShowMobileSearchBar] = useState(false);
  const { user } = useSelector(state => state.auth);

  const iconRef = useRef();
  const forTabletsAndBigger = useMediaQuery("(min-width:30rem)");

  const userIsLoggedIn = user;

  const onUploadHandler = () => {
    setShowUploadModal(prev => !prev);
  };

  const toggleShowAccountMenu = () => {
    setShowUserAccountMenu(prev => !prev);
  };

  const Search = (
    <CustomToolTip title="Search video">
      <SearchIcon sx={{ fontSize: "1.6rem", cursor: "pointer" }} onClick={() => setShowMobileSearchBar(true)} />
    </CustomToolTip>
  );

  const AddVideoIcon = (
    <CustomToolTip title="Add video">
      <VideoCallIcon sx={{ fontSize: "1.6rem", cursor: "pointer" }} onClick={onUploadHandler} />
    </CustomToolTip>
  );

  const NotificationIcon = (
    <CustomToolTip title="Notification">
      <NotificationsNoneIcon sx={{ fontSize: "1.6rem", cursor: "pointer" }} />
    </CustomToolTip>
  );

  const AvatarIcon = (
    <CustomToolTip title="Avatar">
      <Avatar
        src={user?.img}
        alt={user?.name || "User icon."}
        sx={{ width: "2rem", height: "2rem", bgcolor: "#373737", cursor: "pointer" }}
        ref={iconRef}
        onClick={toggleShowAccountMenu}
        imgProps={{ referrerPolicy: "no-referrer" }}
      />
    </CustomToolTip>
  );

  const SignInButton = (
    <CustomToolTip title="Registration">
      <Button to="/auth" icon={<AccountCircleIcon />}>
        SIGN IN
      </Button>
    </CustomToolTip>
  );

  return (
    <Container>
      {showMobileSearchBar && (
        <>
          <Backdrop show={showMobileSearchBar} onClick={() => setShowMobileSearchBar(false)} opacity="0.92" />
          <MobileSearchBar setShowSearchBar={setShowMobileSearchBar} />
        </>
      )}
      {!forTabletsAndBigger && Search}

      {forTabletsAndBigger && userIsLoggedIn && AddVideoIcon}
      {forTabletsAndBigger && userIsLoggedIn && NotificationIcon}

      {userIsLoggedIn && AvatarIcon}

      {showUserAccountMenu && userIsLoggedIn && <UserAccountMenu onClose={toggleShowAccountMenu} iconRef={iconRef} />}

      <Upload show={showUploadModal} setShow={setShowUploadModal} />

      {!userIsLoggedIn && SignInButton}
    </Container>
  );
};
export default Actions;
