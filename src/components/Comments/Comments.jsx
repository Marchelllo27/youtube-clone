import { useSelector } from "react-redux";
import styled from "styled-components";

import Comment from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  padding: 0.2rem;
  outline: none;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const AddCommentButton = styled.button``;

const NoComments = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Comments = ({ allComments }) => {
  // const { currentUser } = useSelector(state => state.user);

  const AreThereComments = allComments && allComments.length;

  // const comments = allComments.map(comment => <Comment key={comment._id} comment={comment} />);

  return (
    <Container>
      {/* ADD NEW COMMENT */}
      <NewComment>
        <Avatar src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
        <Input placeholder="Add a comment..." />
        <AddCommentButton>Add comment</AddCommentButton>
      </NewComment>

      {/* ALL COMMENTS */}
      {AreThereComments ? comments : <NoComments>No comments. Maybe add one?</NoComments>}
    </Container>
  );
};
export default Comments;
