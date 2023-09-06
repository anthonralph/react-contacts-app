import React, { useState } from "react";
import TextField from "../../components/TextField";
import AddButton from "../../components/AddButton";
import Grid from "@mui/material/Grid";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      errors.email = "Invalid email format";
    }
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile Number is required";
    } else if (!/^09\d{9}$/.test(formData.mobileNumber)) {
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

    setLoading(true);

    try {
      const response = await fetch(
        "https://crudcrud.com/api/fbc255a7b24945e5bbeddf4623f4ee1a/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(response);
      if (response.ok) {
        console.log("Contact created successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
        });
      } else {
        console.error("Error creating contact:", response.statusText);
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("Error creating contact:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="firstName"
            formlabel="First Name"
            value={formData.firstName}
            onChange={handleChange}
            error={!!validationErrors.firstName}
            helperText={validationErrors.firstName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="lastName"
            formlabel="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            error={!!validationErrors.lastName}
            helperText={validationErrors.lastName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="email"
            formlabel="Email"
            value={formData.email}
            onChange={handleChange}
            error={!!validationErrors.email}
            helperText={validationErrors.email}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="mobileNumber"
            formlabel="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            error={!!validationErrors.mobileNumber}
            helperText={validationErrors.mobileNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <AddButton type="submit" disabled={loading} />
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
