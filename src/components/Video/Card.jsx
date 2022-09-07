// import { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { format } from "timeago.js";
// EXTRA
import nFormatter from "../../utils/nFormatter";

const Container = styled.article`
  display: ${({ type }) => type === "sm" && "flex"};
`;

const Image = styled.img`
  height: 7rem;
  width: 13rem;
  object-fit: cover;
`;

const Details = styled.div`
  flex: ${({ type }) => type === "sm" && "1 1"};
  display: flex;
  gap: 0.5rem;
  padding: ${({ type }) => (type === "sm" ? "0 0.5rem" : "0.5rem")};
`;
const ChannelImg = styled.img`
  display: ${({ type }) => type === "sm" && "none"};
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
  object-fit: cover;
`;

const Texts = styled.div`
  width: 100%;
`;

const Title = styled.h1``;
const ChannelName = styled.h2`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSoft};
  font-weight: 300;
`;
const Info = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSoft};
`;

const Span = styled.span`
  width: 100%;
  line-height: 1.2rem;
  font-size: 1rem;
  font-weight: 400;
  max-height: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
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
    <Link to="/video/125125125">
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
            <Title>
              <Span>Lorem ipsum dolor sit amet asfasfaasfafconsectetur adipisicing elit. Maxime, hic!</Span>
            </Title>
            <ChannelName>Channel name</ChannelName>
            <Info>{viewsAmount} views &#9679; 2 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};
export default Card;
