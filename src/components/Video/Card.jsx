// import { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { format } from "timeago.js";
// EXTRA
import nFormatter from "../../utils/nFormatter";

const Container = styled.article``;

const Image = styled.img``;

const Details = styled.div`
  /* flex: 1; */
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
`;
const ChannelImg = styled.img`
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
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
    <Link to="/video/125125125">
      <Container>
        <Image
          src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
          alt="video image"
        />
        <Details>
          <ChannelImg
            src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"
            alt="channel logo"
          />
          <Texts>
            <Title>Title</Title>
            <ChannelName>Channel name</ChannelName>
            <Info>{viewsAmount} views &#9679; 2 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};
export default Card;
