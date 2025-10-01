import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import FaceVerification from './pages/FaceVerification';
import BarcodeVerification from './pages/BarcodeVerification';
import BiometricVerification from './pages/BiometricVerification';
import Voting from './pages/Voting';
import ProtectedRoute from './auth/ProtectedRoute';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="bg-onpeBlue text-white p-4 flex justify-between items-center rounded-b-lg shadow-md">
        <h1 className="text-xl font-bold">Sistema de Votación</h1>
        <nav>
          <Link to="/" className="mx-2 hover:underline">Login</Link>
          <Link to="/register" className="mx-2 hover:underline">Regístrate</Link>
        </nav>
      </header>

      {/* RUTAS */}
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify/face" element={<FaceVerification />} />
          <Route path="/verify/barcode" element={<BarcodeVerification />} />
          <Route path="/verify/biometric" element={<BiometricVerification />} />

          {/* Ruta protegida */}
          <Route
            path="/voting"
            element={
              <ProtectedRoute>
                <Voting />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
