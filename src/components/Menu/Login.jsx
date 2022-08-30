import styled from "styled-components";
// MUI
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// EXTRA
import CustomTooltip from "../Shared/Tooltip";
import Button from "../Shared/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: var(--menu-item-paddingLeft);
`;

const Text = styled.p`
  font-size: 0.9rem;
`;

const Login = () => {
  return (
    <Container>
      <Text>Sign in to be able to like, comment, subscribe.</Text>
      <CustomTooltip title="Registration">
        <Button to="/auth" icon={<AccountCircleIcon />}>
          SIGN IN
        </Button>
      </CustomTooltip>
    </Container>
  );
};
export default Login;
