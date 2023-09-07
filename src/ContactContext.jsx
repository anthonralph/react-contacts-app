import { createContext, useReducer, useContext, useEffect } from "react";
import { fetchContacts } from "./api";

const ContactContext = createContext();

const initialState = {
  contacts: [],
  isLoading: false,
  editingId: "",
};

const contactReducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return {
        contacts: action.payload,
      };
    case "SET_LOADING":
      return {
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    const contactsData = await fetchContacts();
    dispatch({ type: "SET_LOADING", payload: false });
    dispatch({ type: "SET_CONTACTS", payload: contactsData });
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
