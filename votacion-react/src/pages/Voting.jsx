import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';

const MOCK_CANDIDATES = [
  { id: 'c1', name: 'Candidato A', party: 'Partido Azul' },
  { id: 'c2', name: 'Candidato B', party: 'Partido Verde' },
  { id: 'c3', name: 'Candidato C', party: 'Partido Rojo' }
];

export default function Voting() {
  const [voted, setVoted] = useState(null);
  const { user } = useAuth();

  function handleVote(candidateId) {
    setVoted(candidateId);
    alert(`Voto registrado (simulado) para ${candidateId}. Usuario: ${user?.name}`);
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-onpeGray p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-onpeBlue mb-6">Votación</h2>
        {MOCK_CANDIDATES.map(c => (
          <div key={c.id} className="flex justify-between items-center border-b py-4">
            <div>
              <p className="font-semibold text-lg">{c.name}</p>
              <p className="text-sm text-gray-600">{c.party}</p>
            </div>
            <button
              onClick={() => handleVote(c.id)}
              disabled={voted === c.id}
              className={`px-4 py-2 rounded-lg ${voted === c.id ? 'bg-gray-400' : 'bg-onpeRed text-white hover:bg-red-700'}`}
            >
              {voted === c.id ? 'Votado' : 'Votar'}
            </button>
          </div>
        ))}
        {voted && <p className="mt-4 text-center text-green-700 font-bold">Gracias por votar 🎉</p>}
      </div>
    </div>
  );
}
