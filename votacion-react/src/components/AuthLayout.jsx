import React from 'react';

export default function AuthLayout({ children, title }) {
  return (
    <div className="min-h-screen flex">
      {/* Panel izquierdo */}
      <div className="w-1/2 bg-gray-900 text-white flex flex-col items-center justify-center p-8">
        <img src="/onpe-logo.png" alt="ONPE" className="w-48 mb-6" />
        <h1 className="text-3xl font-bold">Bienvenido</h1>
        <p className="mt-2 text-gray-300">ONPE</p>
      </div>

      {/* Panel derecho */}
      <div className="w-1/2 bg-onpeGray flex flex-col items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-10 w-3/4 max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}
