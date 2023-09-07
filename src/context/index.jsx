import { createContext, useReducer, useContext } from "react";

const ContactContext = createContext();

const initialState = {
  contacts: [],
};

const contactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, action.payload],
      };
    case "EDIT_CONTACT":
      const updatedContacts = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      return {
        contacts: updatedContacts,
      };
    case "DELETE_CONTACT":
      const filteredContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      return {
        contacts: filteredContacts,
      };
    default:
      return state;
  }
};

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  const fetchData = async () => {
    try {
      const response = await fetch(apiLink);
      if (!response.ok) {
        throw new Error(response);
      }
      const data = await response.json();
      dispatch({ type: "SET_CONTACTS", payload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContacts must be used within a ContactProvider");
  }
  return context;
};
