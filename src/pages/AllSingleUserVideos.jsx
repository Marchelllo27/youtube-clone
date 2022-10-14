import { useParams } from "react-router-dom";
import Videos from "../components/Video/Videos";

const AllSingleUserVideos = () => {
  const { id } = useParams();

  return <Videos url={`find/all/${id}`} />;
};
export default AllSingleUserVideos;
