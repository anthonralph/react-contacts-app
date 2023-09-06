import IconButton from "../../components/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { apiLink } from "../../api";

const DeleteButton = ({ contactId }) => {
  const handleDelete = async () => {
    try {
      const apiUrl = `${apiLink}/${contactId}`;
      const response = await fetch(apiUrl, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return <IconButton icon={<DeleteIcon />} onClick={handleDelete} />;
};

export default DeleteButton;
