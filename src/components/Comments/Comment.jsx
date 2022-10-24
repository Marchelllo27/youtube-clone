import styled from "styled-components";
import { format } from "timeago.js";
// MUI
import { Avatar } from "@mui/material";

const Container = styled.div`
  display: flex;
  gap: 0.6rem;
  margin: 1.8rem 0px;
`;

const AvatarIcon = styled(Avatar)`
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
  return (
    <Container>
      <AvatarIcon src={comment.userId.img} />
      <Details>
        <Name>
          {comment.userId.name} <Date>{format(comment.createdAt)}</Date>
        </Name>
        <Text>{comment.desc}</Text>
      </Details>
    </Container>
  );
};
export default Comment;
