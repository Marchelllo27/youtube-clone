import { useRef } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { CSSTransition } from "react-transition-group";
// MUI
import CloseIcon from "@mui/icons-material/Close";
// EXTRA
import CustomInput from "../Shared/CustomInput";
import Backdrop from "../Shared/Backdrop";
import CustomCreatePortal from "../Shared/CustomCreatePortal";
import Button from "../Shared/Button";
import uploadValidation from "../../validation/upload-video-validation";

const Container = styled.section`
  width: 90%;
  max-width: 40rem;
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  border-radius: 4px;
  z-index: 2000;

  &.fade-upload-enter-active {
    animation: showUploadModal 0.2s ease-out forwards;
  }
  &.fade-upload-exit-active {
    animation: hideUploadModal 0.1s ease-out forwards;
  }

  @keyframes showUploadModal {
    0% {
      translate: -50% -70%;
    }

    100% {
      translate: -50% -50%;
    }
  }

  @keyframes hideUploadModal {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1rem;
  cursor: pointer;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

const TextArea = styled(CustomInput)`
  width: 100%;
  resize: none;
  outline: none;
`;

const Fieldset = styled.fieldset`
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 1rem 1rem 0;

  &:nth-of-type(2) {
    margin-top: 1rem;
  }
`;
const Legend = styled.legend`
  padding: 0 0.5rem;
`;

const ControlInput = styled.div`
  position: relative;
`;

const Small = styled.small`
  position: absolute;
  top: 30px;
  left: 0;
  color: var(--color-error);
`;

const ChooseVideoButton = styled(Button)`
  margin-bottom: 2rem;
  color: ${({ error }) => error && "var(--color-error)"};
  border-color: ${({ error }) => error && "var(--color-error)"};
`;

const ChooseImageButton = styled(ChooseVideoButton)`
  margin-bottom: 1.5rem;
`;

const HiddenInput = styled.input``;

const Upload = ({ show, setShow }) => {
  const modalRef = useRef();
  const imageRef = useRef();
  const videoRef = useRef();

  const submitHandler = (values, actions) => {
    console.log(values);
  };

  const imagePickerHandler = () => {
    imageRef.current.click();
  };

  const videoPickerHandler = () => {
    videoRef.current.click();
  };

  const closeModal = () => {
    setShow(prev => !prev);
  };

  const initialValues = {
    video: "",
    title: "",
    description: "",
    tags: "",
    image: "",
  };

  const UploadComponent = (
    <>
      <Backdrop show={show} onClick={closeModal} />
      <CSSTransition in={show} timeout={200} classNames="fade-upload" nodeRef={modalRef} mountOnEnter unmountOnExit>
        <Container ref={modalRef}>
          <Formik initialValues={initialValues} validationSchema={uploadValidation} onSubmit={submitHandler}>
            {({ errors, getFieldProps, touched }) => {
              return (
                <Form>
                  <CloseButton onClick={closeModal}>
                    <CloseIcon />
                  </CloseButton>

                  <Title>Upload a new Video</Title>

                  <Fieldset>
                    <Legend>Video</Legend>
                    <ControlInput>
                      <HiddenInput
                        type="file"
                        name="video"
                        id="video"
                        ref={videoRef}
                        accept="video/*"
                        style={{ display: "none" }}
                        {...getFieldProps("video")}
                      />
                      <ChooseVideoButton
                        type="button"
                        onClick={videoPickerHandler}
                        error={errors?.video && touched.video}
                      >
                        Choose Video
                      </ChooseVideoButton>
                      {errors?.video && touched.video && <Small>{errors?.video}</Small>}
                    </ControlInput>

                    <CustomInput
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Title*"
                      title="The main video title (required)"
                      required
                    />
                    <TextArea
                      type="textarea"
                      name="description"
                      id="description"
                      title="Video Description (required )"
                      placeholder="Description*"
                      row={8}
                      required
                    />
                    <CustomInput
                      type="text"
                      name="tags"
                      id="tags"
                      placeholder="Tags... (Separated by comma)*"
                      required
                    />
                  </Fieldset>

                  <Fieldset>
                    <Legend>Image</Legend>
                    <ControlInput>
                      <HiddenInput
                        type="file"
                        name="image"
                        id="image"
                        ref={imageRef}
                        accept=".jpg,.jpeg,.png"
                        style={{ display: "none" }}
                        {...getFieldProps("image")}
                      />
                      <ChooseImageButton
                        type="button"
                        onClick={imagePickerHandler}
                        error={errors?.image && touched.image}
                      >
                        Choose Image
                      </ChooseImageButton>
                      {errors?.image && touched.image && <Small>{errors?.image}</Small>}
                    </ControlInput>
                  </Fieldset>

                  <Button type="submit" style={{ margin: "1rem auto 0", padding: "0.8rem 2rem" }}>
                    Upload
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Container>
      </CSSTransition>
    </>
  );

  return <CustomCreatePortal component={UploadComponent} id="modal-root" />;
};
export default Upload;

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

//   };

//   const handleChange = e => {
//   };

//   const uploadFile = (file, urlType) => {
//     // const storage = getStorage(app);
//     // const fileName = `${file?.name}-${Date.now()}`; // some-124121521.jpg
//     // const storageRef = ref(storage, fileName);
//     // const uploadTask = uploadBytesResumable(storageRef, file);
//     // uploadTask.on(
//     //   "state_changed",
//     //   snapshot => {
//     //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     //     urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
//     //     switch (snapshot.state) {
//     //       case "paused":
//     //         console.log("Upload is paused");
//     //         break;
//     //       case "running":
//     //         console.log("Upload is running");
//     //         break;
//     //       default:
//     //         break;
//     //     }
//     //   },
//     //   error => {
//     //     console.log(error);
//     //   },
//     //   () => {
//     //     getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
//     //       setInputs(prevInputs => ({ ...prevInputs, [urlType]: downloadURL }));
//     //     });
//     //   }
//     // );
//   };

//   const handleUpload = async e => {
//     e.preventDefault();
//     // try {
//     //   uploadFile(video, "videoUrl");
//     //   uploadFile(image, "imgUrl");
//     //   const res = await axios.post("videos", { ...inputs, tags });
//     //   setOpen(false);
//     //   navigate(`/video/${res.data._id}`);
//     // } catch (error) {
//     //   return alert(error.response.data.message);
//     // }
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
