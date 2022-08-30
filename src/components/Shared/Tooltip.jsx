// MUI
import Tooltip from "@mui/material/Tooltip";

const CustomToolTip = ({ title, children, ...props }) => {
  return (
    <Tooltip title={title} placement="bottom-end" arrow enterDelay={2000} enterNextDelay={2000} {...props}>
      {children}
    </Tooltip>
  );
};
export default CustomToolTip;
