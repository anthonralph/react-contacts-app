import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useContacts } from "../ContactContext";

export default function TransitionAlerts() {
  const [open, setOpen] = useState(true);
  const { state, dispatch } = useContacts();
  const alert = state.alert;

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={alert.show}>
        <Alert
          severity={alert.type}
          sx={{ mb: 2 }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch({ type: "SET_ALERT", payload: { show: false } });
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {alert.text}
        </Alert>
      </Collapse>
    </Box>
  );
}
