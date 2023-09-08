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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobileNumber: mobileNumber,
    };
    dispatch({ type: "SET_LOADING" });
    const isToUpdate = Object.keys(currentData).length !== 0;
    let action = "edited";
    if (isToUpdate) {
      await updateContact(formData, currentData._id);
      dispatch({ type: "SET_EDIT", payload: "" });
    } else {
      await addContact(formData);
      action = "added";
    }
    const newContacts = await fetchContacts();
    dispatch({ type: "SET_CONTACTS", payload: newContacts });
    dispatch({
      type: "SET_ALERT",
      payload: {
        text: `Contact ${formData.firstName} successfully ${action}!`,
        show: true,
        type: "success",
      },
    });

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
          <AddButton contactId={currentData._id} />
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
