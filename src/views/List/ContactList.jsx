import ContactCard from "../../components/ContactCard";
import Loader from "../../components/Loader";
import { deleteContact, fetchContacts } from "../../api";
import { useContacts } from "../../ContactContext";

const ContactList = () => {
  const { state, dispatch } = useContacts();

  const contacts = state.contacts;

  const loading = state.isLoading;

  const deleteContactAction = async (contactId) => {
    dispatch({ type: "SET_LOADING" });
    await deleteContact(contactId).catch((error) => {
      dispatch({
        type: "SET_ALERT",
        payload: {
          text: error,
          type: "error",
          show: true,
        },
      });
    });
    const newContacts = await fetchContacts();
    dispatch({ type: "SET_CONTACTS", payload: newContacts });
    dispatch({
      type: "SET_ALERT",
      payload: {
        text: "Contact successfully deleted",
        type: "success",
        show: true,
      },
    });
  };
  return (
    <div>
      {contacts?.length != 0 ? <h3>Contacts</h3> : <h3>No Contacts</h3>}
      {loading && <Loader />}
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
