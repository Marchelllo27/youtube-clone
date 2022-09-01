import styled from "styled-components";
import { Link } from "react-router-dom";
// EXTRA
import CustomTooltip from "../Shared/Tooltip";
import logoImg from "../../assets/logo.png";

const Img = styled.img`
  height: 1.5rem;
  margin-right: 0.2rem;
`;

const AppName = styled.h1`
  font-size: 1rem;
  font-weight: 600;
`;

const Logo = () => {
  return (
    <CustomTooltip title="MarkTube Home Page">
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <Img src={logoImg} alt="Logo"/>
        <AppName>MarkTube</AppName>
      </Link>
    </CustomTooltip>
  );
};
export default Logo;
