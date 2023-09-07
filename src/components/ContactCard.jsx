import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContactForm from "../views/Forms/ContactForm";
import { useState } from "react";

const ContactCard = ({ contact, onDelete }) => {
  const [editing, setEditing] = useState(false);
  return (
    <>
      <Card
        sx={{ marginY: "20px", maxWidth: 400, padding: "20px" }}
        variant="outlined"
      >
        {editing ? (
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
                <IconButton onClick={() => setEditing(true)} color="info">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={onDelete} color="error">
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

export default ContactCard;
