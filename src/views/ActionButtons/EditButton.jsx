import IconButton from "../../components/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const EditIconButton = ({ contactId }) => {
  const handleSubmit = async () => {
    console.log(contactId);
  };

  return <IconButton icon={<EditIcon />} onClick={handleSubmit}></IconButton>;
};

export default EditIconButton;
