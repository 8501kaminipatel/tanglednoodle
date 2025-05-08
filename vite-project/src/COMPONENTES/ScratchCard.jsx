import React, { useState, useEffect } from 'react';

const ScratchCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [canFlip, setCanFlip] = useState(true);

  useEffect(() => {
    const lastFlipped = localStorage.getItem('scratchDate');
    const today = new Date().toDateString();
    if (lastFlipped === today) setCanFlip(false);
  }, []);

  const handleFlip = () => {
    if (!flipped && canFlip) {
      setFlipped(true);
      localStorage.setItem('scratchDate', new Date().toDateString());
      localStorage.setItem('scratchReward', '20% OFF'); // ✅ Save the reward
      setCanFlip(false);
    }
  };

  if (!canFlip && !flipped) {
    return null; // Hide if already used today (before flip triggers)
  }

  if (!canFlip && flipped) {
    return <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '20px' }}>🎉 You already used today's reward!</p>;
  }

  return (
    <div className="scratch-container" onClick={handleFlip}>
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className="front">🎁 Scratch Me</div>
        <div className="back">🎉 You won 20% OFF!</div>
      </div>
    </div>
  );
};

export default ScratchCard;
