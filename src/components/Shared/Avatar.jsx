import { forwardRef } from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.soft};
  cursor: pointer;
`;

const Avatar = forwardRef((props, ref) => <Img {...props} ref={ref} />);
export default Avatar;
