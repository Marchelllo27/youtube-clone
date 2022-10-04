import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// MUI
import Avatar from "@mui/material/Avatar";
// EXTRA
import ButtonTemplate from "../Shared/Button";
import { useAddCommentMutation } from "../../api/endpoints/video";

const CommentForm = styled.form``;

const Fieldset = styled.fieldset`
  display: flex;
  width: 100%;
  border: none;
  gap: 0.6rem;
`;

const AvatarIcon = styled(Avatar)`
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

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const AddButton = styled(ButtonTemplate)`
  background-color: #3ea6ff;
  color: ${({ theme }) => theme.bg};
  letter-spacing: 0.05rem;

  &:disabled {
    background-color: gray;
    border-color: gray;
    color: ${({ theme }) => theme.soft};
    cursor: default;
  }
`;

const CancelButton = styled(ButtonTemplate)`
  border: none;
  color: ${({ theme }) => theme.textSoft};
  font-weight: 600;
`;

const NewComment = ({ videoId }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [comment, setComment] = useState("");
  const { user } = useSelector(state => state.auth);

  const [startCommentMutation, { error }] = useAddCommentMutation();

  const sendCommentHandler = async e => {
    e.preventDefault();

    if (!user) {
      return alert("Please login to be able to comment");
    }

    await startCommentMutation({ videoId, desc: comment });

    setComment("");
    setShowButtons(false);
  };

  if (error) {
    return alert(error.data.message);
  }

  const cancelHandler = () => {
    setShowButtons(false);
    setComment("");
  };

  return (
    <CommentForm>
      <Fieldset>
        <AvatarIcon src={user?.img} alt={user?.name} />
        <Input
          placeholder="Add a comment..."
          value={comment}
          onFocus={() => {
            setShowButtons(true);
          }}
          onChange={e => {
            setComment(e.target.value);
          }}
        />
      </Fieldset>

      {showButtons && (
        <ActionButtons>
          <CancelButton type="button" onClick={cancelHandler}>
            CANCEL
          </CancelButton>
          <AddButton type="submit" onClick={sendCommentHandler} disabled={!comment}>
            COMMENT
          </AddButton>
        </ActionButtons>
      )}
    </CommentForm>
  );
};
export default NewComment;
