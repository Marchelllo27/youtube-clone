import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// MUI
import Skeleton from "@mui/material/Skeleton";
import { Avatar } from "@mui/material";
// EXTRA
import nFormatter from "../../utils/nFormatter";
import NotFoundImage from "../../assets/notfound.jpeg";

const Article = styled.article`
  width: 100%;
  max-width: ${({ type }) => (type === "sm" ? "auto" : "20rem")};

  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 1rem;
  cursor: pointer;

  @media (min-width: 360px) {
    height: ${({ type }) => (type === "sm" ? "6rem" : "18rem")};
    flex-direction: ${({ type }) => (type === "sm" ? "row" : "column")};
  }

  @media (min-width: 512px) {
    max-width: 100%;
  }
`;

const ImageBox = styled.div`
  background-color: ${({ videoData }) => videoData && "grey"};
  height: ${({ type }) => (type === "sm" ? "6rem" : "11.25rem")};
  min-width: ${({ type }) => type === "sm" && "11rem"};
`;

const Image = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;
const ChannelImg = styled(Avatar)`
  display: ${({ type }) => type === "sm" && "none"};
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
`;

const Texts = styled.div`
  /* flex: ${({ type }) => type === "sm" && "1"}; */
  flex: 1;
`;

const Title = styled.h1`
  font-size: 0.9rem;
  font-weight: 500;
  overflow: hidden;

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
  const { imgUrl, title, createdAt, views, _id, userId: owner } = videoData || {};

  const createdTime = format(createdAt);
  const viewsAmount = nFormatter(views, 1);

  const onCardClick = () => {
    navidate(`/video/${_id}`);
  };

  //  SKELETON LOADING
  if (!videoData) {
    return (
      <Article type={type}>
        <ImageBox videoData={false} type={type}>
          <Skeleton variant="rectangular" sx={{ width: "100%", height: "100%", bgcolor: "grey.800" }} />
        </ImageBox>

        <Details type={type}>
          <Skeleton variant="circular" width={40} height={40} sx={{ bgcolor: "grey.800" }} />
          <Texts>
            <Skeleton sx={{ width: "100%", bgcolor: "grey.800" }} />
            <Skeleton sx={{ width: "70%", bgcolor: "grey.800" }} />
            <Info>
              <Skeleton sx={{ width: "40%", bgcolor: "grey.800" }} />
            </Info>
          </Texts>
        </Details>
      </Article>
    );
  }

  return (
    <Article type={type} onClick={onCardClick}>
      <ImageBox type={type}>
        <Image
          // src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          src={imgUrl}
          alt={title}
          width="100%"
          height="100%"
          type={type}
          onError={e => (e.currentTarget.src = NotFoundImage)}
          effect="blur"
          // placeholderSrc={NotFoundImage}
        />
      </ImageBox>

      <Details type={type}>
        <ChannelImg src={owner?.img} alt={owner?.name} type={type} imgProps={{ referrerPolicy: "no-referrer" }} />
        <Texts>
          <Title>{title}</Title>
          <ChannelName>{owner?.name}</ChannelName>
          <Info>
            {viewsAmount} views &#9679; {createdTime}
          </Info>
        </Texts>
      </Details>
    </Article>
  );
};

export default Card;
