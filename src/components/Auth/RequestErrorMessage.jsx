import styled from "styled-components";
import Hr from "../Shared/Hr";

const Box = styled.div`
  margin: 1rem 0 0.5rem;
  position: relative;
  width: 100%;
  @media (min-width: 400px) {
    margin-top: 2rem;
  }
`;

const Small = styled.small`
  display: block;
  color: var(--color-error);
  margin-bottom: 1rem;
  @media (min-width: 400px) {
    position: absolute;
    top: -25px;
    left: 50%;
    translate: -50% 0;
    width: 100%;
  }
`;

const RequestErrorMessage = ({ error }) => {
  return (
    <Box>
      {error && <Small>{error.data?.message || "Something went wrong"}</Small>}
      <Hr style={{ width: "200px", margin: "0 auto" }} />
    </Box>
  );
};
export default RequestErrorMessage;
