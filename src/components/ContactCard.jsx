import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContactForm from "../views/Forms/ContactForm";
import { useContacts } from "../ContactContext";
import PropTypes from "prop-types";

const ContactCard = ({ contact, onDelete }) => {
  const { dispatch, state } = useContacts();

  const editingId = state.editingId;

  const loading = state.isLoading;

  return (
    <>
      <Card
        sx={{ marginY: "20px", maxWidth: 400, padding: "20px" }}
        variant="outlined"
      >
        {editingId == contact._id ? (
          <div>
            <h4>Edit Contact</h4>
            <ContactForm contact={contact} />
          </div>
        ) : (
          <CardContent sx={{ textAlign: "left" }}>
            <Grid container spacing={1}>
              <Grid item md={9}>
                <Typography variant="h5">
                  {contact.firstName} {contact.lastName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Email: {contact.email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Mobile Number: {contact.mobileNumber}
                </Typography>
              </Grid>
              <Grid item md={3}>
                <IconButton
                  onClick={() =>
                    dispatch({ type: "SET_EDIT", payload: contact._id })
                  }
                  color="info"
                  disabled={loading}
                >
                  <EditIcon />
                </IconButton>
                <IconButton disabled={loading} onClick={onDelete} color="error">
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        )}
      </Card>
    </>
  );
};
ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

ContactCard.defaultProps = {
  contact: {},
  onDelete: () => console.log("No event"),
};
export default ContactCard;
