import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// MUI
import { Logout } from "@mui/icons-material";
// EXTRA
import { toggleAuthentication } from "../../store/auth-slice";
import { toggleMobileMenu } from "../../store/ui-slice";
import Button from "../Shared/Button";

const ButtonEl = styled(Button)`
  margin: 0 auto;
  transition: all 0.2s linear;

  &:hover {
    border-color: var(--color-error);
    color: var(--color-error);
  }
`;
const Text = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
`;

const LogoutButton = () => {
  const dispatch = useDispatch();
  const { showMobileMenu } = useSelector(state => state.ui);

  const clickHandler = () => {
    dispatch(toggleAuthentication());

    if (showMobileMenu) {
      dispatch(toggleMobileMenu());
    }
  };
  return (
    <ButtonEl onClick={clickHandler}>
      <Logout />
      <Text>Logout</Text>
    </ButtonEl>
  );
};
export default LogoutButton;
