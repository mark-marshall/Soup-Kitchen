import React from 'react';

export default function SoupKitchenList({ kitchens }) {
  return (
    <div>
      {kitchens.map(kitchen => (
        <div key={kitchen.kitchen}>
          <h4>{kitchen.kitchen}</h4>
          <p>{kitchen.location}</p>
          <p>{kitchen.state}</p>
          <a href={kitchen.link}>Go to kitchen</a>
        </div>
      ))}
    </div>
  );
}
