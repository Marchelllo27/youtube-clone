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

const ChooseFileButton = styled(Button)`
  color: ${({ error, isSuccess }) => (error ? "var(--color-error)" : isSuccess && "#64e364")};
  border-color: ${({ error, isSuccess }) => (error ? "var(--color-error)" : isSuccess && "#64e364")};
`;

const Small = styled.small`
  position: absolute;
  top: 30px;
  left: 0;
  color: var(--color-error);
`;

// export const Percentages = styled.div`
//   margin-top: 1rem;
//   @media (min-width: 400px) {
//     margin: 0;
//   }
// `;

const FilePickerButton = ({ success, children, ...props }) => {
  const fileInputRef = useRef();
  const [field, meta] = useField(props);

  const filePickerClickHandler = () => {
    fileInputRef.current.click();
  };

  const hasError = meta.error && meta.touched;

  return (
    <ControlInput>
      <HiddenInput type="file" ref={fileInputRef} style={{ display: "none" }} {...field} {...props} />
      <ChooseFileButton type="button" onClick={filePickerClickHandler} error={hasError} isSuccess={success}>
        {children}
      </ChooseFileButton>
      {hasError && <Small>{meta.error}</Small>}
    </ControlInput>
  );
};
export default FilePickerButton;
