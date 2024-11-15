import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button,
  Grid
} from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g. call backend API
    console.log(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="phone"
            label="Phone Number"
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="company"
            label="Company"
            variant="outlined"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="jobTitle"
            label="Job Title"
            variant="outlined"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Save Contact
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;