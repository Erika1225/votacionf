import React, { createContext, useState, useContext } from 'react';

// Context para manejar autenticación y estado de verificación.
// En producción este estado debe persistir en backend / JWT.
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {id, name, verified: boolean}
  const [verified, setVerified] = useState(false);

  function login(userData) {
    setUser(userData);
    setVerified(false); // al iniciar sesión, exige verificación
  }

  function logout() {
    setUser(null);
    setVerified(false);
  }

  function markVerified() {
    setVerified(true);
  }

  return (
    <AuthContext.Provider value={{ user, verified, login, logout, markVerified }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
