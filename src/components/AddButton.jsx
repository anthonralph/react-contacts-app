import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

const AddButton = () => {
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
    >
      Save
    </Button>
  );
};

export default AddButton;
