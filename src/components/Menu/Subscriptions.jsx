import styled from "styled-components";
// EXTRA
import Channels from "./Channels";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubscriptionsTitle = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSoft};
  text-align: left;
  margin-left: var(--menu-item-paddingLeft);
  margin-bottom: 1rem;
`;

const Subscriptions = () => {
  return (
    <Container>
      <SubscriptionsTitle>Subscriptions</SubscriptionsTitle>
      <Channels />
    </Container>
  );
};
export default Subscriptions;
