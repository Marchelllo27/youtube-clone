import { useEffect } from "react";
// EXTRA
import VideosWrapper from "../components/Shared/VideosWrapper";
import Card from "../components/Video/Card";

const Home = () => {
  useEffect(() => {
    // fetch random videos
    // fetch(`/videos/${type}`);
  }, []);

  return (
    <VideosWrapper>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </VideosWrapper>
  );
};
export default Home;
