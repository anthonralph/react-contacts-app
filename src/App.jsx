import "./App.css";
import Card from "@mui/material/Card";
import ContactForm from "./views/Forms/ContactForm";
import ContactList from "./views/List/ContactList";
import Alert from "./components/Alert";

import { ContactProvider } from "./ContactContext";

function App() {
  return (
    <>
      <ContactProvider>
        <Alert></Alert>
        <Card sx={{ maxWidth: 400, padding: "20px" }}>
          <h2>Add Contact</h2>
          <ContactForm></ContactForm>
        </Card>
        <ContactList></ContactList>
      </ContactProvider>
    </>
  );
}

export default App;
