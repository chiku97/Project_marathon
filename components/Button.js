"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

function Button() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/quiz-form');
  };

  return (
    <div className="card-footer">
      <button className="start-button" onClick={handleClick}>
        Start Quiz
      </button>
    </div>
  );
}

export default Button;