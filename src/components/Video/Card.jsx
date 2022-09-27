import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
// EXTRA
import nFormatter from "../../utils/nFormatter";

const Container = styled.article`
  display: flex;
  flex-direction: ${({ type }) => (type === "sm" ? "row" : "column")};
  overflow: hidden;
  gap: 1rem;
`;

const Image = styled.img`
  max-width: ${({ type }) => type === "sm" && "10.5rem"};
  max-height: ${({ type }) => (type === "sm" ? "5.8rem" : "11.25rem")};
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
  const { name, img } = videoData.userId;
  const defaultImg =
    "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6";

  const createdTime = format(videoData.createdAt);
  const viewsAmount = nFormatter(videoData.views, 1);

  return (
    <Link to={`/video/${videoData._id}`} style={{ width: "fit-content" }}>
      <Container type={type}>
        <Image src={videoData.imgUrl} alt={videoData.title} type={type} />

        <Details type={type}>
          <ChannelImg src={img ? img : defaultImg} alt="channel logo" type={type} />
          <Texts>
            <Title>{videoData.title}</Title>
            <ChannelName>{name}</ChannelName>
            <Info>
              {viewsAmount} views &#9679; {createdTime}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};
export default Card;
