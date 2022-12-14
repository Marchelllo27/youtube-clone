import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
// MUI
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
// EXTRA
import Backdrop from "../../Shared/Backdrop";
import CustomCreatePortal from "../../Shared/CustomCreatePortal";
import Button from "../../Shared/Button";
import uploadValidation from "../../../validation/upload-video-validation";
import useUploadToFirebase from "../../../hooks/useUploadToFirebase";
import { useUploadVideoToMongoDBMutation } from "../../../api/endpoints/video";
import ImageFieldset from "./ImageFieldset";
import VideoFieldset from "./VideoFieldset";
import { openNotification } from "../../../store/ui-slice";

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

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

const SubmitButton = styled(Button)`
  color: ${({ ready, theme }) => (ready ? "#64e364" : theme.soft)};
  border-color: ${({ ready, theme }) => (ready ? "#64e364" : theme.soft)};
  margin: 1rem auto 0;
  padding: 0.8rem 2rem;
  line-height: 1rem;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Spinner = styled(CircularProgress)`
  &.MuiCircularProgress-root {
    color: ${({ theme }) => theme.text};
    width: 1rem !important;
    height: 1rem !important;
    margin: 0 0.8rem;
  }
`;

const ErrorMessage = styled.small`
  color: var(--color-error);
  display: block;
  text-align: center;
  margin-bottom: 1rem;
`;

const Upload = ({ show, setShow }) => {
  const { startUpload, filesUrl, videoPerc, imgPerc, errorMsg, clearHookStates, deleteAllUploadedFiles, setErrorMsg } =
    useUploadToFirebase();
  const [startUploadToMongoDB, { error }] = useUploadVideoToMongoDBMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modalRef = useRef();

  const urlsAreReady = filesUrl.imgUrl && !!filesUrl.videoUrl;

  // FORM SUBMITTING
  const submitHandler = async (values, actions) => {
    const tags = values.tags.replaceAll(" ", "").split(",");

    const videoData = {
      ...values,
      tags,
      ...filesUrl,
    };

    const response = await startUploadToMongoDB(videoData);

    if (response.error) return;

    dispatch(openNotification({ text: "Video uploaded succesfully!", status: "success" }));

    // Clearing
    clearHookStates();
    actions.resetForm();
    setShow(prev => !prev);
    navigate("/my-videos");
  };

  // CLOSE MODAL
  const closeModal = resetForm => {
    deleteAllUploadedFiles();
    resetForm();
    clearHookStates();
    setShow(prev => !prev);
  };

  // ON FILE INPUTS CHANGE
  const fileChangeHandler = async (handleChange, e) => {
    // still allow formik to set file value to the form state.
    handleChange(e);

    const file = e.target.files[0];
    const urlType = e.target.name;

    // CHECK FILE SIZE
    // 1000mb = 1 00 00 00 00 0 byte
    const oneGigaByte = 1000000000;

    if (urlType === "videoUrl" && file.size > oneGigaByte) {
      setErrorMsg("Oops, it's too big video :) max 1GB");
      return;
    } else if (urlType === "imgUrl" && file.size > 15000000) {
      setErrorMsg("Oops, it's too big image :) max 15MB");
      return;
    }

    startUpload(file, urlType);
  };

  // DELETE UPLOADED VIDEO FROM FIREBASE IF PAGE WAS RELOADED or TAB CLOSED
  useEffect(() => {
    window.addEventListener("beforeunload", deleteAllUploadedFiles);
    return () => {
      window.removeEventListener("beforeunload", deleteAllUploadedFiles);
    };
  }, [deleteAllUploadedFiles]);

  const initialValues = {
    videoUrl: "",
    title: "",
    desc: "",
    tags: "",
    imgUrl: "",
  };

  const errorOccured = !!error?.data || !!errorMsg;

  const UploadComponent = (
    <>
      <CSSTransition in={show} timeout={200} classNames="fade-upload" nodeRef={modalRef} mountOnEnter unmountOnExit>
        <Container ref={modalRef}>
          <Formik initialValues={initialValues} validationSchema={uploadValidation} onSubmit={submitHandler}>
            {({ handleChange, resetForm, isValid, isSubmitting }) => (
              <Form>
                <Backdrop show={show} onClick={closeModal.bind(null, resetForm)} />

                <CloseButton autoFocus onClick={closeModal.bind(null, resetForm)}>
                  <CloseIcon />
                </CloseButton>

                <Title>Upload a new Video</Title>

                {errorOccured && (
                  <ErrorMessage>
                    {error?.data?.message || error?.data?.errors[0]?.msg || errorMsg}
                  </ErrorMessage>
                )}

                <VideoFieldset
                  videoPerc={videoPerc}
                  urlIsReady={filesUrl.videoUrl}
                  onChange={fileChangeHandler.bind(null, handleChange)}
                />

                <ImageFieldset
                  imgPerc={imgPerc}
                  urlIsReady={filesUrl.imgUrl}
                  onChange={fileChangeHandler.bind(null, handleChange)}
                />

                <SubmitButton
                  type="submit"
                  ready={urlsAreReady && isValid && !isSubmitting}
                  disabled={!urlsAreReady || !isValid || isSubmitting}
                >
                  {isSubmitting ? <Spinner /> : "Upload"}
                </SubmitButton>
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
