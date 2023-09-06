import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DeleteButton from "../views/ActionButtons/DeleteButton";
import EditButton from "../views/ActionButtons/EditButton";

const ContactCard = ({ contact }) => {
  return (
    <Card sx={{ marginY: "20px" }} variant="outlined">
      <CardContent sx={{ textAlign: "left" }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
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
          <Grid item xs={1}>
            <DeleteButton contactId={contact._id}></DeleteButton>
            <EditButton contactId={contact._id}></EditButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
