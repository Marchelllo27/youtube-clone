import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// EXTRA
import CustomTooltip from "../Shared/Tooltip";
import logoImg from "../../assets/logo.png";
import { toggleMobileMenu } from "../../store/ui-slice";

const Img = styled.img`
  height: 1.5rem;
  margin-right: 0.2rem;
`;

const AppName = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  display: none;

  @media (min-width: 370px) {
    display: inline-block;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showMobileMenu } = useSelector(state => state.ui);

  const onClickLogoHandler = () => {
    navigate("/");
    showMobileMenu && dispatch(toggleMobileMenu());
  };

  return (
    <CustomTooltip title="MarkTube Home Page">
      <Box onClick={onClickLogoHandler}>
        <Img src={logoImg} alt="Logo" />
        <AppName>MarkTube</AppName>
      </Box>
    </CustomTooltip>
  );
};
export default Logo;
