import styled from "styled-components";
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
import { Link, useNavigate } from "react-router-dom";

const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Actions = ({ userIsLoggedIn }) => {
  const forTabletsAndBigger = useMediaQuery("(min-width:30rem)");
  const navigate = useNavigate();

  const onUploadHandler = () => {
    navigate("/upload");
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
      {!forTabletsAndBigger && Search}

      {forTabletsAndBigger && userIsLoggedIn && AddVideoIcon}
      {forTabletsAndBigger && userIsLoggedIn && NotificationIcon}

      {userIsLoggedIn && AvatarIcon}

      {!userIsLoggedIn && SignInButton}
    </Container>
  );
};
export default Actions;
