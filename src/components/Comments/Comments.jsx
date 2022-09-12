import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// EXTRA
import ButtonTemplate from "../Shared/Button";
import Comment from "./Comment";

const Container = styled.div`
  @media (min-width: 70rem) {
    grid-column: 1 / 2;
  }
`;

const NewComment = styled.form`
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
  padding: 0.4rem;
  outline: none;
  width: 100%;
  color: ${({ theme }) => theme.text};
  transition: border-color 0.1s linear;

  &:focus {
    border-color: ${({ theme }) => theme.text};
  }
`;

const Button = styled(ButtonTemplate)`
  &:hover {
    background-color: black;
  }
`;

const NoComments = styled.p`
  margin-top: 1rem;
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.text};
`;

const Comments = () => {
  // const { currentUser } = useSelector(state => state.user);
  const [showButton, setShowButton] = useState(false);
  const [comment, setComment] = useState("");

  const allComments = [];
  const comments = allComments?.map(comment => <Comment key={comment._id} comment={comment} />);

  const sendCommentHandler = e => {
    e.preventDefault();

    if (comment.trim() !== "") {
      console.log(comment);
      setComment("");
    }
  };

  const onBlurHandler = () => {
    setTimeout(() => {
      setShowButton(false);
    }, 100);
  };

  return (
    <Container>
      {/* ADD NEW COMMENT */}
      <NewComment>
        <Avatar src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" />
        <Input
          placeholder="Add a comment..."
          value={comment}
          onFocus={() => setShowButton(true)}
          onBlur={onBlurHandler}
          onChange={e => {
            setComment(e.target.value);
          }}
        />
        {showButton && <Button onClick={sendCommentHandler}>Add comment</Button>}
      </NewComment>

      {/* ALL COMMENTS */}
      {comments.length > 0 ? comments : <NoComments>No comments. Maybe add one?</NoComments>}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};
export default Comments;
