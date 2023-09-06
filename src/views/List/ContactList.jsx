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

  return (
    <div>
      {contacts.map((contact, index) => (
        <ContactCard contact={contact} key={index} />
      ))}
    </div>
  );
};

export default App;
