import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

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
CustomTextField.propTypes = {
  props: PropTypes.object.isRequired,
};

CustomTextField.defaultProps = {
  props: {},
};
export default CustomTextField;
