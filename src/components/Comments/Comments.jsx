import styled from "styled-components";
// EXTRA
import Comment from "./Comment";
import NewComment from "./NewComment";
import { useGetCommentsForVideoQuery } from "../../api/endpoints/video";

const Container = styled.div`
  @media (min-width: 70rem) {
    grid-column: 1 / 2;
  }
`;

const NoComments = styled.p`
  margin-top: 2rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.text};
`;

const Comments = ({ videoId }) => {
  const { data: fetchedComments, error } = useGetCommentsForVideoQuery(videoId);

  const comments = fetchedComments?.map(comment => <Comment key={comment._id} comment={comment} />);

  return (
    <Container>
      {/* ADD NEW COMMENT */}
      <NewComment videoId={videoId} />

      {/* ALL COMMENTS */}
      {error && <NoComments>{error.data.message}</NoComments>}
      {comments?.length > 0 && comments}
      {!error && !comments?.length && <NoComments>No comments. Maybe add one?</NoComments>}
    </Container>
  );
};
export default Comments;
