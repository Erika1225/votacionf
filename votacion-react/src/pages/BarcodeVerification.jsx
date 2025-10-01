import React, { useEffect, useRef, useState } from 'react';
import Quagga from 'quagga';
import { useNavigate } from 'react-router-dom';

export default function BarcodeVerification() {
  const scannerRef = useRef();
  const [status, setStatus] = useState('Escaneando...');
  const nav = useNavigate();

  useEffect(() => {
    Quagga.init({
      inputStream: {
        type: "LiveStream",
        target: scannerRef.current,
        constraints: { facingMode: "environment" }
      },
      decoder: { readers: ["code_128_reader", "ean_reader"] }
    }, err => {
      if (err) { setStatus("Error: " + err.message); return; }
      Quagga.start();
    });

    Quagga.onDetected(data => {
      Quagga.stop();
      setStatus("Código válido: " + data.codeResult.code);
      setTimeout(() => nav('/verify/biometric'), 1000); // 👉 siguiente paso
    });

    return () => { Quagga.stop(); Quagga.offDetected(); };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-onpeGray p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h2 className="text-xl font-bold text-onpeBlue mb-4">Verificación de DNI</h2>
        <div ref={scannerRef} className="w-full min-h-[300px] border rounded-lg" />
        <p className="mt-2 text-sm text-gray-600">{status}</p>
      </div>
    </div>
  );
}
