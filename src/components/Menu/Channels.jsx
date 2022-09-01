import styled from "styled-components";
import { Avatar } from "@mui/material";
// EXTRA
import user from "../../assets/user.jpg";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Channel = styled.li`
  display: flex;
  align-items: center;
  gap: var(--menu-item-gap);
  padding: var(--menu-item-paddingY) 0;
  padding-left: var(--menu-item-paddingLeft);
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Name = styled.p`
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  font-weight: 400;
`;

const Avatar2 = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Channels = () => {
  return (
    <Container>
      <Channel>
        <Avatar2 src={user} sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Tofan Marc</Name>
      </Channel>
      <Channel>
        <Avatar2 src={user} sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Tofan Nadia</Name>
      </Channel>
      <Channel>
        <Avatar2 src={user} sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Zelenskiy</Name>
      </Channel>
      <Channel>
        <Avatar2 src={user} sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Zelenskiy</Name>
      </Channel>
      <Channel>
        <Avatar2 src={user} sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Zelenskiy</Name>
      </Channel>
      <Channel>
        <Avatar2 src={user} sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Zelenskiy</Name>
      </Channel>
      <Channel>
        <Avatar2 src={user} sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Zelenskiy</Name>
      </Channel>
      <Channel>
        <Avatar2 src={user} sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Zelenskiy</Name>
      </Channel>
    </Container>
  );
};
export default Channels;
