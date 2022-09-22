import { useRef } from "react";
import { useField } from "formik";
import styled from "styled-components";
// EXTRA
import Button from "../../Shared/Button";

export const ControlInput = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  @media (min-width: 400px) {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

const HiddenInput = styled.input``;

export const ChooseVideoButton = styled(Button)`
  color: ${({ error, videoPerc }) => (error ? "var(--color-error)" : videoPerc === 100 ? "#64e364" : null)};
  border-color: ${({ error, videoPerc }) => (error ? "var(--color-error)" : videoPerc === 100 ? "#64e364" : null)};
`;

export const Small = styled.small`
  position: absolute;
  top: 30px;
  left: 0;
  color: var(--color-error);
`;

export const Percentages = styled.div`
  margin-top: 1rem;
  @media (min-width: 400px) {
    margin: 0;
  }
`;

const VideoPickerButton = ({ videoPerc, ...props }) => {
  const videoRef = useRef();
  const [field, meta] = useField(props);

  const videoButtonClickHandler = () => {
    videoRef.current.click();
  };

  return (
    <ControlInput>
      <HiddenInput
        type="file"
        id="video"
        ref={videoRef}
        accept="video/*"
        style={{ display: "none" }}
        {...field}
        {...props}
      />
      <ChooseVideoButton
        type="button"
        onClick={videoButtonClickHandler}
        error={meta.error && meta.touched}
        videoPerc={videoPerc}
      >
        Choose Video
      </ChooseVideoButton>
      {meta.error && meta.touched && <Small>{meta.error}</Small>}
    </ControlInput>
  );
};
export default VideoPickerButton;
