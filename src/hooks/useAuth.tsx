import { useState } from 'react';

// Define types for the user data
interface User {
  email: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email: string, password: string) => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      const userData = { email };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData)); // Store user data after login
      return true; // Successful login
    }
    return false; // Failed login
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Clear user data on logout
  };

  const isAuthenticated = !!user;

  return { user, login, logout, isAuthenticated };
}
