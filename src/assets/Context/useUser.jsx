import React, { useState, createContext, useContext } from 'react';
// Initialize context with default values
export const AuthContext = createContext({
  email: null,
  password: null,
  setEmail: () => {},
  setPassword: () => {},
});
// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <AuthContext.Provider value={{ email, password, setEmail, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
// Custom hook for consuming the context
export const useAuth = () => useContext(AuthContext);