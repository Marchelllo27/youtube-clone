// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import styled from "styled-components";
// import app from "../config/firebase";

// const Container = styled.section`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: #000000ab;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const Wrapper = styled.div`
//   width: 90%;
//   max-width: 37.5rem;
//   height: 37.5rem;
//   background-color: ${({ theme }) => theme.bgLighter};
//   color: ${({ theme }) => theme.text};
//   padding: 1.25rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
//   position: relative;
// `;
// const Close = styled.div`
//   position: absolute;
//   top: 0.6rem;
//   right: 1rem;
//   cursor: pointer;
// `;
// const Title = styled.h1`
//   text-align: center;
//   font-size: 2rem;
// `;

// const Input = styled.input`
//   border: 1px solid ${({ theme }) => theme.soft};
//   color: ${({ theme }) => theme.text};
//   border-radius: 3px;
//   padding: 0.6rem;
//   background-color: transparent;
// `;

// const Desc = styled.textarea`
//   border: 1px solid ${({ theme }) => theme.soft};
//   color: ${({ theme }) => theme.text};
//   border-radius: 3px;
//   padding: 0.6rem;
//   background-color: transparent;
// `;

// const Button = styled.button`
//   border-radius: 3px;
//   border: none;
//   padding: 0.3rem 1rem;
//   font-weight: 500;
//   cursor: pointer;
//   background-color: ${({ theme }) => theme.soft};
//   color: ${({ theme }) => theme.textSoft};
// `;

// const Label = styled.label`
//   font-size: 1rem;
// `;

// const Upload = ({ setOpen }) => {
//   const [image, setImage] = useState(null);
//   const [video, setVideo] = useState(null);
//   const [imgPerc, setImgPerc] = useState(0);
//   const [videoPerc, setVideoPerc] = useState(0);
//   const [inputs, setInputs] = useState({});
//   const [tags, setTags] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();

//   const onChangeTagsHandler = e => {
//     setTags(e.target.value.split(","));
//   };

//   const handleChange = e => {
//     setInputs(prevInputs => ({ ...prevInputs, [e.target.name]: e.target.value }));
//   };

//   const uploadFile = (file, urlType) => {
//     const storage = getStorage(app);
//     const fileName = `${file?.name}-${Date.now()}`; // some-124121521.jpg
//     const storageRef = ref(storage, fileName);

//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       "state_changed",
//       snapshot => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

//         urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
//         switch (snapshot.state) {
//           case "paused":
//             console.log("Upload is paused");
//             break;
//           case "running":
//             console.log("Upload is running");
//             break;
//           default:
//             break;
//         }
//       },
//       error => {
//         console.log(error);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
//           setInputs(prevInputs => ({ ...prevInputs, [urlType]: downloadURL }));
//         });
//       }
//     );
//   };

//   const handleUpload = async e => {
//     e.preventDefault();
//     try {
//       uploadFile(video, "videoUrl");
//       uploadFile(image, "imgUrl");
//       const res = await axios.post("videos", { ...inputs, tags });
//       setOpen(false);
//       navigate(`/video/${res.data._id}`);
//     } catch (error) {
//       return alert(error.response.data.message);
//     }
//   };

//   return (
//     <Container>
//       <Wrapper>
//         <Close onClick={() => setOpen(false)}>X</Close>
//         <Title>Upload a New Video</Title>
//         <Label>Video</Label>
//         {videoPerc > 0 ? (
//           `Uploading: ${videoPerc}%`
//         ) : (
//           <Input type="file" accept="video/*" onChange={e => setVideo(e.target.files[0])} />
//         )}
//         <Input type="text" name="title" placeholder="Title" onChange={handleChange} />
//         <Desc placeholder="Description" name="desc" rows={8} onChange={handleChange} />
//         <Input type="text" placeholder="Separate the tags with commas." onChange={onChangeTagsHandler} />
//         <Label>Image:</Label>
//         {imgPerc > 0 ? (
//           `Uploading: ${imgPerc}%`
//         ) : (
//           <Input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
//         )}
//         <Button onClick={handleUpload}>Upload</Button>
//       </Wrapper>
//     </Container>
//   );
// };
// export default Upload;

const Upload = () => {
  return <div>Upload</div>;
};
export default Upload;
