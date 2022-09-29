import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
// EXTRA
import nFormatter from "../../utils/nFormatter";
import NotFoundImage from "../../assets/notfound.jpeg";

const Article = styled.article`
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: ${({ type }) => (type === "sm" ? "row" : "column")};
  overflow: hidden;
  gap: 1rem;
  cursor: pointer;

  @media (min-width: 512px) {
    max-width: 100%;
  }
`;

const ImageBox = styled.div`
  background-color: gray;
  height: ${({ type }) => (type === "sm" ? "6rem" : "11.25rem")};
  width: ${({ type }) => type === "sm" && "11rem"};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const ChannelImg = styled.img`
  display: ${({ type }) => type === "sm" && "none"};
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
`;

const Texts = styled.div`
  flex: ${({ type }) => type === "sm" && "1"};
`;

const Title = styled.h1`
  font-size: 0.9rem;
  font-weight: 500;

  overflow: hidden;
  max-width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ChannelName = styled.h2`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSoft};
  font-weight: 300;
`;
const Info = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ videoData, type }) => {
  const navidate = useNavigate();
  const { imgUrl, title, createdAt, views, _id, userId } = videoData || {};

  const defaultChannelImg =
    "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6";
  const defaultVideoImg =
    "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg";
  const createdTime = format(createdAt);
  const viewsAmount = nFormatter(views, 1);

  const onCardClick = () => {
    navidate(`/video/${_id}`);
  };

  return (
    <Article type={type} onClick={onCardClick}>
      <ImageBox type={type}>
        <Image src={NotFoundImage} alt={title} type={type} />
      </ImageBox>

      <Details type={type}>
        <ChannelImg src={userId?.img ? userId?.img : defaultChannelImg} alt="channel logo" type={type} />
        <Texts>
          <Title>{title}</Title>
          <ChannelName>{userId?.name}</ChannelName>
          <Info>
            {viewsAmount} views &#9679; {createdTime}
          </Info>
        </Texts>
      </Details>
    </Article>
  );
};
export default Card;
