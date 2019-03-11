import React from 'react';

export default function Pantry({ items }) {
  return (
    <div>
      <h3>Pantry</h3>
      <ol>
        {items.map(item => (
          <li>
            <p>{item.name}</p>
            <p>{item.amount}</p>
            <p>{item.unit}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
