import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { useContacts } from "../ContactContext";

const AddButton = () => {
  const { state } = useContacts();

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<SaveIcon />}
      type="submit"
      size="small"
      sx={{
        borderRadius: "20px",
        margin: "10px",
      }}
      disabled={state.isLoading}
    >
      Save
    </Button>
  );
};

export default AddButton;
