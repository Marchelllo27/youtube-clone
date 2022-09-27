import styled from "styled-components";
// EXTRA
import FilePickerButton from "./FilePickerButton";
import CustomInput from "../../Shared/CustomInput";

export const Fieldset = styled.fieldset`
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 1rem 1rem 0;

  &:nth-of-type(2) {
    margin-top: 1rem;
  }
`;

export const Legend = styled.legend`
  color: ${({ success }) => success && "#64e364"};
  padding: 0 0.5rem;
`;

const TextArea = styled(CustomInput)`
  width: 100%;
  resize: none;
  outline: none;
`;

const VideoFieldset = ({ videoPerc, urlIsReady, onChange }) => {
  const percentages = videoPerc === 100;
  const loaded = percentages && urlIsReady;

  return (
    <Fieldset>
      <Legend success={loaded}>Video{videoPerc > 0 && ` uploading: ${videoPerc}%`} </Legend>

      <FilePickerButton id="videoUrl" name="videoUrl" accept="video/*" onChange={onChange} success={loaded} />

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
        name="desc"
        id="desc"
        title="Video Description (required )"
        placeholder="Description*"
        rows={5}
        required
      />
      <CustomInput type="text" name="tags" id="tags" placeholder="Tags... (Separated by comma)*" required />
    </Fieldset>
  );
};
export default VideoFieldset;
