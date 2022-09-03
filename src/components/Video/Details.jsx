import styled from "styled-components";
// import axios from "axios";
// import { format } from "timeago.js";
import { useDispatch, useSelector } from "react-redux";

// MUI
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

import ActionButton from "./ActionButton";
import { like, dislike } from "../../store/video-slice";
import nFormatter from "../../utils/nFormatter";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.textSoft};
`;
const Info = styled.span``;
const Buttons = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const Details = () => {
  // const userIsLoggedIn = useSelector(state => state.user.currentUser);
  // const video = useSelector(state => state.video.currentVideo);
  // const dispatch = useDispatch();

  // const iAlreadyLiked = video?.likes?.includes(userIsLoggedIn?._id);
  // const iAlreadyDisliked = video?.dislikes?.includes(userIsLoggedIn?._id);

  // const likeHandler = async () => {
  //   if (!userIsLoggedIn) {
  //     return alert("You can't like if you are not logged in, sorry.");
  //   }
  //   await axios.post(`/videos/like/${video._id}`);

  //   dispatch(like(userIsLoggedIn._id));
  // };

  // const dislikeHandler = async () => {
  //   if (!userIsLoggedIn) {
  //     return alert("You can't dislike if you are not logged in, sorry.");
  //   }
  //   await axios.post(`/videos/dislike/${video._id}`);
  //   dispatch(dislike(userIsLoggedIn._id));
  // };

  // let viewsAmount;
  // if (video?.views < 1000) {
  //   viewsAmount = video?.views;
  // } else if (video?.views > 999 && video?.views < 1000000) {
  //   viewsAmount = nFormatter(video?.views, 1);
  // } else if (video?.views > 999999) {
  //   viewsAmount = nFormatter(video?.views, 1);
  // }

  return (
    <Container>
      <Info>
        {viewsAmount} views &#9679; {format(video?.createdAt)}
      </Info>
      <Buttons>
        <ActionButton
          // onClick={}
          // icon={iAlreadyLiked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
          icon={<ThumbUpOffAltIcon />}
          text="Like"
          likesAmount={353}
        />
        <ActionButton
          // onClick={dislikeHandler}
          // icon={iAlreadyDisliked ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
          icon={<ThumbDownOffAltIcon />}
          text=" Dislike"
          // dislikesAmount={video?.dislikes?.lenght}
          dislikesAmount={151}
        />
        <ActionButton icon={<ReplyIcon />} text="Share" />
        <ActionButton icon={<SaveAltIcon />} text="Save" />
      </Buttons>
    </Container>
  );
};
export default Details;
