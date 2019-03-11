import React from 'react';

import PantryList from './PantryList';
import AddToPantry from './AddToPantry';

export default function Pantry({ items, itemsValuesSet, addItem, fireAddItem  }) {
  return (
    <div>
      <h3>Pantry</h3>
      <PantryList items={items} />
      <AddToPantry itemsValuesSet={itemsValuesSet} addItem={addItem} fireAddItem={fireAddItem} />
    </div>
  );
}
