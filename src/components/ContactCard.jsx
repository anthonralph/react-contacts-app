import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ContactCard = ({ contact, onDelete, onEdit }) => {
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
          <Grid item xs={3}>
            <IconButton onClick={onEdit} color="info">
              <EditIcon />
            </IconButton>
            <IconButton onClick={onDelete} color="error">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
