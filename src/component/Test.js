import React, { useState } from 'react';

const Test= () => {
  const [name, setName] = useState('Tenzin');

  const handleClick = () => {
    const names = ['Tenzin', 'Pelmo', 'Passang'];
    const randomIndex = Math.floor(Math.random() * 3);
    setName(names[randomIndex]);
  };

  return (
    <div>
      <button onClick={handleClick}>Chang the name </button>
      <p>Hello {name}</p>
    </div>
  );
};

export default Test;
