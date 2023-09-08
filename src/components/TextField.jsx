import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const CustomTextField = (props) => {
  return (
    <>
      <Typography variant="body2" color="textSecondary">
        {props.formlabel}
      </Typography>
      <TextField
        hiddenLabel
        variant="filled"
        size="small"
        className="rounded-textfield"
        InputProps={{
          disableUnderline: true,
        }}
        {...props}
      />
    </>
  );
};

export default CustomTextField;
