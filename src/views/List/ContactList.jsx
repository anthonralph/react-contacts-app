import ContactCard from "../../components/ContactCard";
import { apiLink } from "../../api";
import { useContacts } from "../../ContactContext";

const ContactList = () => {
  const { state, dispatch } = useContacts();

  const contacts = state.contacts;

  const deleteContact = async (contactId) => {
    try {
      const apiUrl = `${apiLink}/${contactId}`;
      const response = await fetch(apiUrl, {
        method: "DELETE",
      });
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
      {contacts?.map((contact, index) => (
        <ContactCard
          contact={contact}
          key={index}
          onDelete={() => deleteContact(contact._id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
