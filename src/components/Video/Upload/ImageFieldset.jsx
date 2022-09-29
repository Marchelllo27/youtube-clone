import styled from "styled-components";
// EXTRA
import FilePickerButton from "./FilePickerButton";
import { Fieldset } from "./VideoFieldset";
import { Legend } from "./VideoFieldset";

const ImageFieldset = ({ imgPerc, urlIsReady, onChange }) => {
  const percentages = imgPerc === 100;
  const loaded = percentages && urlIsReady;

  return (
    <Fieldset>
      <Legend success={loaded}>Image{imgPerc > 0 && ` uploading: ${imgPerc}%`} </Legend>
      <FilePickerButton id="imgUrl" name="imgUrl" accept=".jpg,.jpeg,.png" onChange={onChange} success={loaded}>
        Choose Image
      </FilePickerButton>
    </Fieldset>
  );
};
export default ImageFieldset;
