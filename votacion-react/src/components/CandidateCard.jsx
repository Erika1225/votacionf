import React from 'react';

export default function CandidateCard({ candidate, onVote, voted }) {
  return (
    <div className="candidate">
      <div>
        <strong>{candidate.name}</strong><br />
        <small>{candidate.party}</small>
      </div>
      <div>
        <button onClick={onVote} disabled={voted}>{voted ? 'Votado' : 'Votar'}</button>
      </div>
    </div>
  );
}
