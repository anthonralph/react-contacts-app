import IconButton from "../../components/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({ contactId }) => {
  const handleDelete = async () => {
    try {
      const apiUrl = `https://crudcrud.com/api/7c7374bcc3c24a2087036860c9c177cc/contacts/${contactId}`;
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
