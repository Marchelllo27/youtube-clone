import { useRef } from "react";
import { useField } from "formik";
import styled from "styled-components";
// EXTRA
import { Small } from "./VideoPickerButton";
import { ControlInput } from "./VideoPickerButton";
import { ChooseVideoButton } from "./VideoPickerButton";
import { Fieldset } from "./Upload";
import { Legend } from "./Upload";
import { Percentages } from "./VideoPickerButton";

const HiddenInput = styled.input``;

const ChooseImageButton = styled(ChooseVideoButton)`
  color: ${({ error, imgPerc }) => (error ? "var(--color-error)" : imgPerc === 100 ? "#64e364" : null)};
  border-color: ${({ error, imgPerc }) => (error ? "var(--color-error)" : imgPerc === 100 ? "#64e364" : null)};
`;

const ImagePicker = ({ imgPerc, ...props }) => {
  const imageRef = useRef();
  const [field, meta] = useField(props);

  const imagePickerHandler = () => {
    imageRef.current.click();
  };

  return (
    <Fieldset>
      <Legend perc={imgPerc}>Image{imgPerc > 0 && ` uploading: ${imgPerc}%`} </Legend>
      <ControlInput>
        <HiddenInput
          type="file"
          id="image"
          ref={imageRef}
          accept=".jpg,.jpeg,.png"
          style={{ display: "none" }}
          {...field}
          {...props}
        />
        <ChooseImageButton
          type="button"
          onClick={imagePickerHandler}
          error={meta.error && meta.touched}
          imgPerc={imgPerc}
        >
          Choose Image
        </ChooseImageButton>
        {props.imgPerc > 0 && <Percentages>Uploading: {props.imgPerc}%</Percentages>}
        {meta.error && meta.touched && <Small>{meta.error}</Small>}
      </ControlInput>
    </Fieldset>
  );
};
export default ImagePicker;
