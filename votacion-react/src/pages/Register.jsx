import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

export default function Register() {
  const [name, setName] = useState('');
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    alert('Registro simulado completado. Ahora inicia sesión.');
    nav('/');
  }

  return (
    <AuthLayout title="Registro">
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input className="w-full border rounded-lg p-2 mt-1" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium">DNI</label>
          <input className="w-full border rounded-lg p-2 mt-1" value={dni} onChange={e => setDni(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium">Contraseña</label>
          <input type="password" className="w-full border rounded-lg p-2 mt-1" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="w-full bg-onpeRed text-white py-2 rounded-lg hover:bg-red-700">
          Crear cuenta
        </button>
      </form>
    </AuthLayout>
  );
}
