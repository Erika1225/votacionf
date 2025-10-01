import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import AuthLayout from '../components/AuthLayout';

export default function Login() {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login({ id: 'user1', name: 'Usuario', dni });
    nav('/verify/face');
  }

  return (
    <AuthLayout title="Ingreso">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">DNI</label>
          <input
            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-onpeBlue"
            value={dni}
            onChange={e => setDni(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Contraseña</label>
          <input
            type="password"
            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-onpeBlue"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          Iniciar sesión
        </button>
        <p className="text-sm text-right text-gray-500 hover:underline cursor-pointer">
          ¿Olvidaste tu contraseña?
        </p>
      </form>
    </AuthLayout>
  );
}
