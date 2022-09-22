import styled from "styled-components";
import { useDispatch } from "react-redux";
// MUI
import useMediaQuery from "@mui/material/useMediaQuery";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { Logout } from "@mui/icons-material";

// EXTRA
import Button from "../Shared/Button";
import CustomToolTip from "../Shared/Tooltip";
import { useState } from "react";
import { logoutUser } from "../../store/auth-slice";
import Upload from "../Video/Upload/Upload";

const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Aside = styled.aside`
  position: absolute;
  top: var(--header-height);
  right: 0;
  color: white;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgLighter};
  z-index: 1000;
`;

const MenuItems = styled.ul``;

const MenuItem = styled.li`
  display: flex;
  gap: 0.5rem;
  color: var(--color-error);
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #c20000;
  }
`;

const Actions = ({ userIsLoggedIn }) => {
  const [showUserAccountMenu, setShowUserAccountMenu] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const forTabletsAndBigger = useMediaQuery("(min-width:30rem)");
  const dispatch = useDispatch();

  const onUploadHandler = () => {
    setShowUploadModal(prev => !prev);
  };

  const onAvatarClickhandler = () => {
    setShowUserAccountMenu(prev => !prev);
  };

  const onLogoutHandler = () => {
    dispatch(logoutUser());
    setShowUserAccountMenu(false);
  };

  const Search = (
    <CustomToolTip title="Search video">
      <SearchIcon sx={{ fontSize: "1.6rem", cursor: "pointer" }} />
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
        src="https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
        alt="User"
        sx={{ width: "2rem", height: "2rem", bgcolor: "#373737", cursor: "pointer" }}
        onClick={onAvatarClickhandler}
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

  const UserAccountMenu = (
    <Aside>
      <MenuItems>
        <MenuItem onClick={onLogoutHandler}>
          <Logout />
          Logout
        </MenuItem>
      </MenuItems>
    </Aside>
  );

  return (
    <Container>
      {!forTabletsAndBigger && Search}

      {forTabletsAndBigger && userIsLoggedIn && AddVideoIcon}
      {forTabletsAndBigger && userIsLoggedIn && NotificationIcon}

      {userIsLoggedIn && AvatarIcon}

      {showUserAccountMenu && userIsLoggedIn && UserAccountMenu}

      <Upload show={showUploadModal} setShow={setShowUploadModal} />

      {!userIsLoggedIn && SignInButton}
    </Container>
  );
};
export default Actions;
