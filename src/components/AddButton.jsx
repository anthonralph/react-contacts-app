import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const AddButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      type="submit"
      size="small" // Set the size to 'small'
      sx={{
        borderRadius: "20px",
        align: "left",
      }}
    >
      Add
    </Button>
  );
};

export default AddButton;
