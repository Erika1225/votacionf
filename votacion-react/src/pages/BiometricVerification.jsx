import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function BiometricVerification() {
  const [status, setStatus] = useState('');
  const { markVerified } = useAuth();
  const nav = useNavigate();

  function startWebAuthn() {
    setStatus('Verificando huella...');
    setTimeout(() => {
      setStatus('Biometría verificada ✅');
      markVerified();
      nav('/voting'); // 👉 última etapa
    }, 1200);
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-onpeGray p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h2 className="text-xl font-bold text-onpeBlue mb-4">Verificación Biométrica</h2>
        <p className="mb-4 text-gray-600">Coloca tu huella digital en el sensor.</p>
        <button onClick={startWebAuthn} className="w-full bg-onpeRed text-white py-2 rounded-lg hover:bg-red-700">Verificar huella</button>
        <p className="mt-2 text-sm text-gray-600">{status}</p>
      </div>
    </div>
  );
}
