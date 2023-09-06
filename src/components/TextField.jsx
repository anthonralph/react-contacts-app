import TextField from "@mui/material/TextField";

const CustomTextField = (props) => {
  return (
    <TextField
      hiddenLabel
      variant="filled"
      size="small"
      className="rounded-textfield"
      helperText="Please enter your name"
      InputProps={{
        disableUnderline: true,
      }}
      {...props}
    />
  );
};

export default CustomTextField;
