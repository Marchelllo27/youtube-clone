import styled from "styled-components";

export const ContainerHr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.soft};
  margin: 1rem 0;
  border: none;

  @media (min-width: 70rem) {
    grid-column: ${({ gridBigScreen }) => gridBigScreen && "1 / 2"};

    &:last-of-type {
      display: ${({ gridBigScreen }) => gridBigScreen && "none"};
    }
  }
`;

const Hr = ({ grid }) => {
  return <ContainerHr gridBigScreen={grid} />;
};
export default Hr;
