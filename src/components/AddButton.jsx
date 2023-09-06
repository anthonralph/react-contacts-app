import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const AddButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      type="submit"
    >
      Add
    </Button>
  );
};

export default AddButton;
