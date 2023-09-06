import TextField from "@mui/material/TextField";

const CustomTextField = (props) => {
  const helperText = "Please enter your " + props.formLabel.toLowerCase();
  return (
    <>
      <p>{props.formLabel}</p>
      <TextField
        hiddenLabel
        variant="filled"
        size="small"
        className="rounded-textfield"
        helperText={helperText}
        InputProps={{
          disableUnderline: true,
        }}
        {...props}
      />
    </>
  );
};

export default CustomTextField;
