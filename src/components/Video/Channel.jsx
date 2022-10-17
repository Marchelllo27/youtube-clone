import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// MUI
import { Avatar } from "@mui/material";
// EXTRA
import { useSubscriptionToChannelMutation } from "../../api/endpoints/user";
import nFormatter from "../../utils/nFormatter";
import { subscribe, unsubscribe } from "../../store/auth-slice";
import { openNotification } from "../../store/ui-slice";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 24rem) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 70rem) {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ChannelImage = styled(Avatar)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 0.25rem;
  margin-bottom: 1.3rem;
  color: ${({ theme }) => theme.textSoft};
  font-size: 0.7rem;
`;

const Description = styled.p`
  font-size: 0.8rem;
`;

const SubscribeButton = styled.button`
  background-color: ${({ theme, isSubscribed }) => (isSubscribed ? theme.soft : "#cc1a00")};
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 0.6rem 1.5rem;
  cursor: pointer;
`;

const Channel = () => {
  const { user } = useSelector(state => state.auth);
  const video = useSelector(state => state.video.videoData);
  const dispatch = useDispatch();
  const [startSubscription] = useSubscriptionToChannelMutation();

  const { userId: videoOwnerData, desc } = video || {};

  const isSubscribedAlready = user?.subscribedUsers?.find(video => video._id === videoOwnerData?._id);

  // SUBSCRIBE HANDLER
  const subscriptionHandler = async () => {
    if (!user) {
      dispatch(openNotification({ text: "Please login to be able to subscribe to any channel.", status: "warning" }));
      return;
    }

    let url;
    isSubscribedAlready ? (url = "unsub") : (url = "sub");

    try {
      await startSubscription(`${url}/${videoOwnerData?._id}`).unwrap();

      const channelInfo = {
        name: videoOwnerData?.name,
        img: videoOwnerData?.img,
        _id: videoOwnerData?._id,
      };

      isSubscribedAlready ? dispatch(unsubscribe(videoOwnerData?._id)) : dispatch(subscribe(channelInfo));

      const notificationType = url === "unsub" ? "unsubscribed" : "subscribed";

      dispatch(openNotification({ text: `Successfully ${notificationType}` }));
    } catch (error) {
      dispatch(openNotification({ text: error.data.message, status: "error" }));
      return;
    }
  };

  const subscribersAmount = nFormatter(videoOwnerData?.subscribers);
  const subscribers = videoOwnerData?.subscribers === 1 ? "subscriber" : "subscribers";

  return (
    <Container>
      <ChannelInfo>
        <ChannelImage
          src={videoOwnerData?.img}
          alt={videoOwnerData?.name}
          imgProps={{ referrerPolicy: "no-referrer" }}
        />
        <ChannelDetails>
          <ChannelName>{videoOwnerData?.name}</ChannelName>
          <ChannelCounter>
            {subscribersAmount} {subscribers}
          </ChannelCounter>
          <Description>{desc}</Description>
        </ChannelDetails>
      </ChannelInfo>
      <SubscribeButton isSubscribed={isSubscribedAlready} onClick={subscriptionHandler}>
        {isSubscribedAlready ? "SUBSCRIBED" : "SUBSCRIBE"}
      </SubscribeButton>
    </Container>
  );
};
export default Channel;
