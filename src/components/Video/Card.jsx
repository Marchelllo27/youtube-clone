// import { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { format } from "timeago.js";
// EXTRA
import nFormatter from "../../utils/nFormatter";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  gap: 1rem;
  overflow: hidden;
`;

const Image = styled.img`
  max-height: 11.25rem;
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
  object-fit: cover;
`;

const Texts = styled.div``;

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

const Card = ({ type, video }) => {
  // const [channel, setChannel] = useState({});

  // useEffect(() => {
  //   const fetchChannel = async () => {
  //     const res = await axios.get(`/users/find/${video.userId}`);
  //     setChannel(res.data);
  //   };
  //   fetchChannel();
  // }, [video.userId]);

  // const createdTime = format(video.createdAt);

  const viewsAmount = nFormatter(123200, 1);

  return (
    <Link to="/video/125125125" style={{ width: "fit-content" }}>
      <Container type={type}>
        <Image
          src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
          alt="video image"
          type={type}
        />

        <Details type={type}>
          <ChannelImg
            src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"
            alt="channel logo"
            type={type}
          />
          <Texts>
            <Title>Lorem ipsum dolor sit amet asfasfaasfafconsectetur adipisicing elit. Maxime, hic!</Title>
            <ChannelName>Channel name</ChannelName>
            <Info>{viewsAmount} views &#9679; 2 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};
export default Card;
