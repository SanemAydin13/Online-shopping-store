import React from 'react';
import { Box, Typography, IconButton, Grid, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        width: '100%',
        height:'10%'
      }}
    >
      {/* Social Media Icons */}
      <Grid 
        container 
        justifyContent="center" 
        spacing={2} 
        sx={{
          '& .MuiGrid-item': {
            display: 'inline-flex',
          }
        }}
      >
        <Grid item>
          <IconButton aria-label="Facebook" sx={{ color: '#fff' }}>
            <Facebook />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="Twitter" sx={{ color: '#fff' }}>
            <Twitter />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="Instagram" sx={{ color: '#fff' }}>
            <Instagram />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="GitHub" sx={{ color: '#fff' }}>
            <GitHub />
          </IconButton>
        </Grid>
       
      </Grid>

      {/* Navigation Links */}
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          gap: 3, // spacing between the links
        }}
      >
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          Home
        </Link>
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          News
        </Link>
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          About
        </Link>
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          Contact Us
        </Link>
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          Our Team
        </Link>
      </Box>

      {/* Copyright Text */}
      <Typography
        variant="body2"
        sx={{
          mt: 2,
          color: '#fff',
        }}
      >
        &copy; 2024 Designed by ONLINE STORE
      </Typography>
    </Box>
  );
};

export default Footer;
