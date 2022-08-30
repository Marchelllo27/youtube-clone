import styled from "styled-components";
// MUI
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const Text = styled.h2`
  letter-spacing: 2px;
`;
const Demonstrate = () => {
  return (
    <Container>
      <Text>
        Created for demonstration purpose <EmojiEmotionsIcon />
      </Text>
    </Container>
  );
};
export default Demonstrate;
