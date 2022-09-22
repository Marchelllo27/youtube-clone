import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { CSSTransition } from "react-transition-group";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// MUI
import CloseIcon from "@mui/icons-material/Close";
// EXTRA
import app from "../../../config/firebase";
import CustomInput from "../../Shared/CustomInput";
import Backdrop from "../../Shared/Backdrop";
import CustomCreatePortal from "../../Shared/CustomCreatePortal";
import Button from "../../Shared/Button";
import uploadValidation from "../../../validation/upload-video-validation";
import ImagePicker from "./ImagePicker";
import VideoPickerButton from "./VideoPickerButton";

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

export const Fieldset = styled.fieldset`
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 1rem 1rem 0;

  &:nth-of-type(2) {
    margin-top: 1rem;
  }
`;

export const Legend = styled.legend`
  color: ${({ perc }) => perc === 100 && "#64e364"};
  padding: 0 0.5rem;
`;

const Upload = ({ show, setShow }) => {
  const [video, setVideo] = useState();
  const [image, setImage] = useState();
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const [filesUrl, setFilesUrl] = useState({});
  const modalRef = useRef();

  const submitHandler = (values, actions) => {
    const tags = values.tags.replaceAll(" ", "").split(",");

    const videoData = {
      ...values,
      tags,
      ...filesUrl,
    };
    delete videoData.video;
    delete videoData.image;

    console.log(videoData);
    // Clearing
    setVideoPerc(0);
    setImgPerc(0);
    setVideo(null);
    setImage(null);
    actions.resetForm();
  };

  const uploadFileFireBase = (file, urlType) => {
    const storage = getStorage(app);

    const uniqueFilename = `${Date.now()}-${file.name}`;
    const storageRef = ref(storage, uniqueFilename);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      snapshot => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      error => console.log(error),
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setFilesUrl({ ...filesUrl, [urlType]: downloadURL });
        });
      }
    );
  };

  useEffect(() => {
    video && uploadFileFireBase(video, "videoUrl");
  }, [video]);

  useEffect(() => {
    image && uploadFileFireBase(image, "imgUrl");
  }, [image]);

  const closeModal = resetForm => {
    // Clearing
    setVideo(null);
    setImage(null);
    resetForm();
    setVideoPerc(0);
    setImgPerc(0);
    setShow(prev => !prev);
  };

  const fileChangeHandler = (handleChange, e) => {
    const file = e.target.files[0];
    handleChange(e);

    e.target.name === "video" ? setVideo(file) : setImage(file);
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
      <CSSTransition in={show} timeout={200} classNames="fade-upload" nodeRef={modalRef} mountOnEnter unmountOnExit>
        <Container ref={modalRef}>
          <Formik initialValues={initialValues} validationSchema={uploadValidation} onSubmit={submitHandler}>
            {({ handleChange, resetForm }) => (
              <Form>
                <Backdrop show={show} onClick={closeModal.bind(null, resetForm)} />
                <CloseButton onClick={closeModal.bind(null, resetForm)}>
                  <CloseIcon />
                </CloseButton>

                <Title>Upload a new Video</Title>

                <Fieldset>
                  <Legend perc={videoPerc}>Video{videoPerc > 0 && ` uploading: ${videoPerc}%`} </Legend>

                  <VideoPickerButton
                    name="video"
                    onChange={fileChangeHandler.bind(null, handleChange)}
                    videoPerc={videoPerc}
                  />

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
                    rows={5}
                    required
                  />
                  <CustomInput type="text" name="tags" id="tags" placeholder="Tags... (Separated by comma)*" required />
                </Fieldset>

                <ImagePicker name="image" onChange={fileChangeHandler.bind(null, handleChange)} imgPerc={imgPerc} />

                <Button type="submit" style={{ margin: "1rem auto 0", padding: "0.8rem 2rem" }}>
                  Upload
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </CSSTransition>
    </>
  );

  return <CustomCreatePortal component={UploadComponent} id="modal-root" />;
};
export default Upload;
