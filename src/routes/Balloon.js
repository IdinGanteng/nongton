import React from 'react';

const Player = ({ name, choice, result }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <div>{name}</div>
      <div style={{ fontSize: '40px', fontWeight: 'bold', margin: '20px' }}>{choice}</div>
      <div>{result}</div>
    </div>
  );
};

export default Player;
