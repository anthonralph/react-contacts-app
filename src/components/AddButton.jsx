import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { useContacts } from "../ContactContext";

const AddButton = (props) => {
  const { state, dispatch } = useContacts();
  const editButton = state.editingId == props.contactId;
  return (
    <>
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
        {editButton ? "Save" : "Add"}
      </Button>
      {editButton && (
        <Button
          size="small"
          sx={{
            margin: "10px",
          }}
          onClick={() => dispatch({ type: "SET_EDIT", payload: "" })}
        >
          Cancel
        </Button>
      )}
    </>
  );
};

export default AddButton;
