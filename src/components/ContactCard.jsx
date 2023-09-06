import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ContactCard = ({ contact }) => {
  return (
    <Card sx={{ marginY: "20px" }}>
      <CardContent sx={{ textAlign: "left" }}>
        <Typography variant="h5">
          {contact.firstName} {contact.lastName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Email: {contact.email}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Mobile Number: {contact.mobileNumber}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
