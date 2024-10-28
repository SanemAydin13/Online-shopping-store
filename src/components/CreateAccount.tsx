// CreateAccount.tsx
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return;
    }

    // Store credentials in localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    setErrorMessage('');
    setSuccessMessage('Account created successfully! You can now sign in.');

    // Navigate to Sign In page
    navigate('/'); // Redirect to sign-in page after account creation
  };

  return (
    <div>
      <Box
        sx={{
          marginLeft: '70%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          maxWidth: 400,
          padding: 20,
          borderRadius: 10,
          backgroundColor: '#ccccff',
          boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.2)',
          textAlign: 'center',
          width:200,
          height:150

        }}
      >
        <h2>Create Account</h2>
        <form onSubmit={handleCreateAccount}>
          <TextField
            sx={{ maxWidth: 400, width: '300px', m: 2, bgcolor: '#ffffff' }}
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ maxWidth: 400, width: '300px', m: 1, bgcolor: '#ffffff' }}
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            sx={{ maxWidth: 400, width: '300px', m: 1, bgcolor: '#ffffff' }}
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorMessage && <Typography color="error">{errorMessage}</Typography>}
          {successMessage && <Typography color="success">{successMessage}</Typography>}
          <Button
            sx={{ maxWidth: 400, width: '300px', m: 2, bgcolor: '#6868b3' }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Create Account
          </Button>
        </form>
        <Link to="/">Already have an account? Sign In</Link>
      </Box>
    </div>
  );
};

export default CreateAccount;
