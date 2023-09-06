import IconButton from "@mui/material/IconButton";

const CustomIconButton = ({ icon, onClick }) => {
  return (
    <IconButton onClick={onClick} size="small">
      {icon}
    </IconButton>
  );
};

export default CustomIconButton;
