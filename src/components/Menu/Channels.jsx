import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// MUI
import { Avatar } from "@mui/material";
// EXTRA
import { toggleMobileMenu } from "../../store/ui-slice";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Channel = styled.li`
  display: flex;
  align-items: center;
  gap: var(--menu-item-gap);
  padding: var(--menu-item-paddingY) 0;
  padding-left: var(--menu-item-paddingLeft);
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Name = styled.p`
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  font-weight: 400;
`;

const Channels = () => {
  const { user } = useSelector(state => state.auth);
  const { showMobileMenu } = useSelector(state => state.ui);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickChannelHandler = (userId, event) => {
    navigate(`/all-user-videos/${userId}`);
    if (showMobileMenu) {
      dispatch(toggleMobileMenu());
    }
  };

  return (
    <Container>
      {user.subscribedUsers.length <= 0 && (
        <Channel>
          <Name>No subscriptions</Name>
        </Channel>
      )}
      {user.subscribedUsers.length > 0 &&
        user.subscribedUsers.map(user => (
          <Channel key={user._id} onClick={onClickChannelHandler.bind(null, user._id)}>
            <Avatar
              src={user.img}
              sx={{ width: 24, height: 24 }}
              alt={user.name}
              imgProps={{ referrerPolicy: "no-referrer" }}
            />
            <Name>{user.name}</Name>
          </Channel>
        ))}
    </Container>
  );
};
export default Channels;
