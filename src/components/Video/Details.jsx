import styled from "styled-components";
import { format } from "timeago.js";
import { useSelector, useDispatch } from "react-redux";
// MUI
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
// EXTRA
import ActionButton from "./ActionButton";
import nFormatter from "../../utils/nFormatter";
import { useLikeDislikeVideoMutation } from "../../api/endpoints/video";
import { setLike, setDislike } from "../../store/video-slice";
import { openNotification } from "../../store/ui-slice";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.textSoft};

  @media (max-width: 42rem) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  @media (min-width: 70rem) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;
const Info = styled.span``;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const Details = () => {
  const userIsLoggedIn = useSelector(state => state.auth.user);
  const video = useSelector(state => state.video.videoData);
  const [startLikesDislikeMutation, { error }] = useLikeDislikeVideoMutation();
  const dispatch = useDispatch();

  const iAlreadyLiked = video?.likes?.includes(userIsLoggedIn?._id);
  const iAlreadyDisliked = video?.dislikes?.includes(userIsLoggedIn?._id);

  const likesHandler = async type => {
    if (!userIsLoggedIn) {
      dispatch(
        openNotification({ text: `You can't ${type} if you are not logged in, please login.`, status: "warning" })
      );
      return;
    }

    if (iAlreadyLiked && type === "like") return;
    if (iAlreadyDisliked && type === "dislike") return;

    try {
      await startLikesDislikeMutation({ type, videoId: video._id }).unwrap();
    } catch (error) {
      dispatch(openNotification({ text: "Something wrong on the server.Sorry about that!", status: "error" }));
      return;
    }

    type === "like" && dispatch(setLike(userIsLoggedIn?._id));
    type === "dislike" && dispatch(setDislike(userIsLoggedIn?._id));
  };

  return (
    <Container>
      <Info>
        {nFormatter(video?.views, 1)} views &#9679; {format(video?.createdAt)}
      </Info>
      <Buttons>
        <ActionButton
          onClick={likesHandler.bind(null, "like")}
          icon={iAlreadyLiked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
          text="Like"
          likesAmount={video?.likes?.length}
        />
        <ActionButton
          onClick={likesHandler.bind(null, "dislike")}
          icon={iAlreadyDisliked ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
          text="Dislike"
          dislikesAmount={video?.dislikes?.length}
        />
        <ActionButton icon={<ReplyIcon />} text="Share" />
        <ActionButton icon={<SaveAltIcon />} text="Save" />
      </Buttons>
    </Container>
  );
};
export default Details;
