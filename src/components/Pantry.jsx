import React from 'react';

import PantryList from './PantryList';
import AddToPantry from './AddToPantry';

export default function Pantry({ items }) {
  return (
    <div>
      <h3>Pantry</h3>
      <PantryList items={items} />
      <AddToPantry />
    </div>
  );
}
