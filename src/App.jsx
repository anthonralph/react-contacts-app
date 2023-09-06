import { useState } from "react";
import "./App.css";
import ContactForm from "./views/Forms/ContactForm";
import Card from "@mui/material/Card";
import ContactList from "./views/List/ContactList";

function App() {
  return (
    <>
      <Card sx={{ maxWidth: 400, padding: "20px" }}>
        <h2>Add Contact</h2>
        <ContactForm></ContactForm>
      </Card>
      <ContactList></ContactList>
    </>
  );
}

export default App;
