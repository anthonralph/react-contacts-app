import React, { useState, useEffect } from "react";
import TextField from "../../components/TextField";
import AddButton from "../../components/AddButton";
import Grid from "@mui/material/Grid";
import { addContact, updateContact, fetchContacts } from "../../api";
import { useContacts } from "../../ContactContext";

const ContactForm = (contact) => {
  const { dispatch, state } = useContacts();

  const currentData = contact?.contact || {};
  const [firstName, setFirstName] = useState(currentData?.firstName || "");
  const [lastName, setLastName] = useState(currentData?.lastName || "");
  const [email, setEmail] = useState(currentData?.email || "");
  const [mobileNumber, setMobileNumber] = useState(
    currentData?.mobileNumber || ""
  );

  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!mobileNumber.trim()) {
      errors.mobileNumber = "Mobile Number is required";
    } else if (!/^09\d{9}$/.test(mobileNumber)) {
      errors.mobileNumber = 'Mobile Number must start with "09"';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    mobileNumber: mobileNumber,
  };

  const editContact = async () => {
    try {
      const response = await fetch(`${apiLink}/${currentData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    const isToUpdate = Object.keys(currentData).length !== 0;
    if (isToUpdate) {
      await editContact();
      await updateContact(formData, currentData._id);
    } else {
      await addContact(formData);
    }
    const newContacts = await fetchContacts();
    dispatch({ type: "SET_CONTACTS", payload: newContacts });
    setLoading(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNumber("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <Grid container spacing={1} sx={{ textAlign: "center" }}>
        <Grid item xs={12} md={6}>
          <TextField
            name="firstName"
            formlabel="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value.trim());
            }}
            error={!!validationErrors.firstName}
            helperText={validationErrors.firstName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="lastName"
            formlabel="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value.trim());
            }}
            error={!!validationErrors.lastName}
            helperText={validationErrors.lastName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="email"
            formlabel="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.trim());
            }}
            error={!!validationErrors.email}
            helperText={validationErrors.email}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="mobileNumber"
            formlabel="Mobile Number"
            value={mobileNumber}
            onChange={(e) => {
              setMobileNumber(e.target.value.trim());
            }}
            error={!!validationErrors.mobileNumber}
            helperText={validationErrors.mobileNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <AddButton type="submit" />
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
