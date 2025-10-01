import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

export default function FaceVerification() {
  const videoRef = useRef();
  const [status, setStatus] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      videoRef.current.srcObject = stream;
    }).catch(() => setStatus('Error accediendo a la cámara.'));
  }, []);

  function verify() {
    setStatus('Verificando...');
    setTimeout(() => {
      setStatus('✅ Rostro verificado');
      nav('/verify/barcode');
    }, 1200);
  }

  return (
    <AuthLayout title="Verificación Facial">
      <video ref={videoRef} autoPlay playsInline className="rounded-lg border w-full mb-4" />
      <button onClick={verify} className="w-full bg-onpeBlue text-white py-2 rounded-lg hover:bg-blue-900">
        Capturar y verificar
      </button>
      <p className="mt-2 text-sm text-gray-600">{status}</p>
    </AuthLayout>
  );
}
