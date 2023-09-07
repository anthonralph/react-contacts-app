import ContactCard from "../../components/ContactCard";
import { useState } from "react";
import { useEffect } from "react";
import { apiLink } from "../../api";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiLink);
      if (!response.ok) {
        throw new Error(response);
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteContact = async (contactId) => {
    try {
      const apiUrl = `${apiLink}/${contactId}`;
      const response = await fetch(apiUrl, {
        method: "DELETE",
      });
      console.log(contactId);
      console.log("excecuted");
      await fetchData();
      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div>
      {contacts.map((contact, index) => (
        <ContactCard
          contact={contact}
          key={index}
          onDelete={() => deleteContact(contact._id)}
        />
      ))}
    </div>
  );
};

export default App;
