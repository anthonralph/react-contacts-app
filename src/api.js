let apiLink = "https://crudcrud.com/api/0ea2ae02d42c405395a87e1d0032bff8";
apiLink = apiLink + "/contacts";

export const fetchContacts = async () => {
  try {
    const response = await fetch(apiLink);
    if (!response.ok) {
      throw new Error(response);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const addContact = async (contact) => {
  try {
    const response = await fetch(apiLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    if (response.ok) {
      console.log("Contact created successfully");
    } else {
      console.error("Error creating contact:", response.statusText);
    }
  } catch (error) {
    console.error("Error creating contact:", error);
  }
};

export const deleteContact = async (contactId) => {
  try {
    const apiUrl = `${apiLink}/${contactId}`;
    const response = await fetch(apiUrl, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete contact");
    }
  } catch (error) {
    console.error("Error deleting contact:", error);
  }
};

export const updateContact = async (contact, contactId) => {
  try {
    const response = await fetch(`${apiLink}/${contactId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export { apiLink };
