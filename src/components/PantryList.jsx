import React from 'react';

export default function PantryList({ items }) {
  return (
    <ol>
      {items.map(item => (
        <li key={item.id}>
          <p>{item.name}</p>
          <p>{item.amount}</p>
          <p>{item.unit}</p>
          <button>Edit</button>
          <button>Delete</button>
        </li>
      ))}
    </ol>
  );
}
