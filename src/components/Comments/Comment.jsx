import { useState, useEffect } from "react";
import styled from "styled-components";
import { format } from "timeago.js";

const Container = styled.div`
  display: flex;
  gap: 0.6rem;
  margin: 1.8rem 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 0.7rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 0.3rem;
`;
const Text = styled.span`
  font-size: 0.8rem;
`;

const Comment = ({ comment }) => {
  // const [commentAuthor, setCommentAuthor] = useState({});

  // useEffect(() => {
  //   const fetchAuthor = async () => {
  //     const res = await axios.get(`/users/find/${comment.userId}`);

  //     setCommentAuthor(res.data);
  //   };

  //   try {
  //     fetchAuthor();
  //   } catch (error) {
  //     alert(error.response.data.message);
  //   }
  // }, [comment.userId]);

  return (
    <Container>
      <Avatar src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
      <Details>
        <Name>
          Author <Date>{format("2022-08-22T11:25:39.720+00:00")}</Date>
        </Name>
        <Text>The best video ever</Text>
      </Details>
    </Container>
  );
};
export default Comment;
