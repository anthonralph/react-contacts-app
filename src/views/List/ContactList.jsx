import ContactCard from "../../components/ContactCard";
import { deleteContact, fetchContacts } from "../../api";
import { useContacts } from "../../ContactContext";

const ContactList = () => {
  const { state, dispatch } = useContacts();

  const contacts = state.contacts;

  const loading = state.isLoading;

  const deleteContactAction = async (contactId) => {
    await deleteContact(contactId);
    const newContacts = await fetchContacts();
    dispatch({ type: "SET_CONTACTS", payload: newContacts });
  };

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {contacts?.map((contact, index) => (
        <ContactCard
          contact={contact}
          key={index}
          onDelete={() => deleteContactAction(contact._id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
