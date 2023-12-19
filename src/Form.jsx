// Import necessary dependencies
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';

// Create the component
const MyForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    creditCardNumber: '',
    cvv: '',
    cardExpiry: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const response = await axios.post('http://localhost:3001/submit-form', formData);
      console.log('Form data sent successfully:', response.data);
      console.log(formData);
      // You can handle the response as needed
    } catch (error) {
      console.error('Error sending form data:', error);
      // Handle errors
    }
  };

  // Render the component
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Credit Card Form
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <TextField
         
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoFocus
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            maxLength={16}
            required
            fullWidth
            id="creditCardNumber"
            label="Credit Card Number"
            name="creditCardNumber"
            value={formData.creditCardNumber}
            onChange={handleInputChange}
          />
          <TextField
         
            margin="normal"
           
            required
            fullWidth
            id="cvv"
            label="CVV"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="cardExpiry"
            label="Card Expiry"
            name="cardExpiry"
            value={formData.cardExpiry}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

// Export the component
export default MyForm;
