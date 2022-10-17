import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// MUI
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// EXTRA
import CustomTooltip from "../Shared/Tooltip";
import Button from "../Shared/Button";
import { toggleMobileMenu } from "../../store/ui-slice";

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
  const { showMobileMenu } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (showMobileMenu) {
      dispatch(toggleMobileMenu());
    }
  };

  return (
    <Container>
      <Text>Sign in to be able to like, comment, subscribe.</Text>
      <CustomTooltip title="Registration">
        <Button to="/auth" icon={<AccountCircleIcon />} onClick={clickHandler}>
          SIGN IN
        </Button>
      </CustomTooltip>
    </Container>
  );
};
export default Login;
