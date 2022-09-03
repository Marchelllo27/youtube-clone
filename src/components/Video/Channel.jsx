// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";
// import { subscription } from "../../redux/userSlice";
// import nFormatter from "../../utils/nFormatter";

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const ChannelInfo = styled.div`
//   display: flex;
//   gap: 0.5rem;
// `;

// const ChannelImage = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50px;
// `;

// const ChannelDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   color: ${({ theme }) => theme.text};
// `;

// const ChannelName = styled.span`
//   font-weight: 500;
// `;

// const ChannelCounter = styled.span`
//   margin-top: 0.25rem;
//   margin-bottom: 1.3rem;
//   color: ${({ theme }) => theme.textSoft};
//   font-size: 0.7rem;
// `;

// const Description = styled.p`
//   font-size: 0.8rem;
// `;

// const SubscribeButton = styled.button`
//   background-color: ${({ theme, subscribedAlready }) => (subscribedAlready ? theme.soft : "#cc1a00")};
//   font-weight: 500;
//   color: white;
//   border: none;
//   border-radius: 3px;
//   height: max-content;
//   padding: 0.6rem 1.5rem;
//   cursor: pointer;
// `;

// const Channel = ({ videoOwnerData }) => {
//   const user = useSelector(state => state.user.currentUser);
//   const video = useSelector(state => state.video.currentVideo);
//   const dispatch = useDispatch();

//   const userIsSubscribedToThisChannel = user?.subscribedUsers.includes(videoOwnerData?._id);

//   const subscriptionHandler = async () => {
//     const url = userIsSubscribedToThisChannel
//       ? `/users/unsub/${videoOwnerData?._id}`
//       : `/users/sub/${videoOwnerData?._id}`;
//     try {
//       await axios.put(url);
//       dispatch(subscription(videoOwnerData?._id));
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };

//   let subscribersAmount;
//   if (videoOwnerData?.subscribers < 1000) {
//     subscribersAmount = videoOwnerData?.subscribers;
//   } else if (videoOwnerData?.subscribers > 999 && videoOwnerData?.subscribers < 1000000) {
//     subscribersAmount = nFormatter(videoOwnerData?.subscribers, 1);
//   } else if (videoOwnerData?.subscribers > 999999) {
//     subscribersAmount = nFormatter(videoOwnerData?.subscribers, 1);
//   }

//   return (
//     <Container>
//       <ChannelInfo>
//         <ChannelImage src={user?.img} />
//         <ChannelDetails>
//           <ChannelName>{videoOwnerData?.name}</ChannelName>
//           <ChannelCounter>{subscribersAmount} subscribers</ChannelCounter>
//           <Description>{video?.desc}</Description>
//         </ChannelDetails>
//       </ChannelInfo>
//       <SubscribeButton subscribedAlready={userIsSubscribedToThisChannel} onClick={subscriptionHandler}>
//         {userIsSubscribedToThisChannel ? "SUBSCRIBED" : "SUBSCRIBE"}
//       </SubscribeButton>
//     </Container>
//   );
// };
// export default Channel;
