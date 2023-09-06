import ContactCard from "../../components/ContactCard";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const apiUrl =
    "https://crudcrud.com/api/7c7374bcc3c24a2087036860c9c177cc/contacts";
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
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

  return (
    <div>
      {contacts.map((contact, index) => (
        <ContactCard contact={contact} key={index} />
      ))}
    </div>
  );
};

export default App;
