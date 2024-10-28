// SignIn.tsx
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Adjust the import path accordingly

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login(email, password)) {
      setErrorMessage('');
      navigate('/home'); // Redirect to home on successful login
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <Box sx={{
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

    }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
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
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        <Button
          sx={{ maxWidth: 400, width: '300px', m: 2, bgcolor: '#6868b3' }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign In
        </Button>
      </form>
      <Link style={{ cursor: 'pointer' }} to="/signup">Don't have an account? Sign Up</Link>
    </Box>
  );
};

export default SignIn;
