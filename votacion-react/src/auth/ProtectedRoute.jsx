import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Protege rutas que requieren usuario logueado y verificado
export default function ProtectedRoute({ children }) {
  const { user, verified } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }
  if (!verified) {
    // si no está verificado, lo mandamos a la selección de verificación
    return <Navigate to="/verify" replace />;
  }

  return children;
}
