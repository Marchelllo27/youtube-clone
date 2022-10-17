import React from "react";
import { useDispatch, useSelector } from "react-redux";
// MUI
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// EXTRA
import CustomCreatePortal from "./CustomCreatePortal";
import { closeNotification } from "../../store/ui-slice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NotificationBar = () => {
  const { showNotification, notificationText, notificationStatus } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeNotification());
  };

  const Notification = (
    <Snackbar open={showNotification} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={notificationStatus} sx={{ width: "100%" }}>
        {notificationText}
      </Alert>
    </Snackbar>
  );

  return <CustomCreatePortal component={Notification} id="modal-root" />;
};
export default NotificationBar;
