import styled from "styled-components";
import { Avatar } from "@mui/material";
// EXTRA


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

const Channels = () => {
  return (
    <Container>
      <Channel>
        <Avatar src="https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg" sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Tofan Marc</Name>
      </Channel>
      <Channel>
        <Avatar src="https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg" sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Tofan Nadia</Name>
      </Channel>
      <Channel>
        <Avatar src="https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg" sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Zelenskiy</Name>
      </Channel>
      <Channel>
        <Avatar src="https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg" sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Zelenskiy</Name>
      </Channel>
      <Channel>
        <Avatar src="https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg" sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Zelenskiy</Name>
      </Channel>
      <Channel>
        <Avatar src="https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg" sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Zelenskiy</Name>
      </Channel>
      <Channel>
        <Avatar src="https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg" sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Zelenskiy</Name>
      </Channel>
      <Channel>
        <Avatar src="https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg" sx={{ width: 24, height: 24 }} alt="Channel logo" />
        <Name>Zelenskiy</Name>
      </Channel>
    </Container>
  );
};
export default Channels;
