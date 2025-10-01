import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerificationSelection() {
  const nav = useNavigate();

  return (
    <div className="card">
      <h2>Verificación de identidad</h2>
      <p>Selecciona un método para verificar tu identidad antes de votar:</p>
      <button onClick={() => nav('/verify/face')}>Verificación Facial</button>
      <button onClick={() => nav('/verify/barcode')}>Código de barras del DNI</button>
      <button onClick={() => nav('/verify/biometric')}>Biométrica (WebAuthn)</button>
      <p style={{marginTop:12}}>Nota: Puedes integrar múltiples métodos; aquí mostramos la selección y prototipos.</p>
    </div>
  );
}
