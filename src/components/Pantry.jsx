import React from 'react';

import PantryList from './PantryList';
import AddToPantry from './AddToPantry';

export default function Pantry({
  items,
  itemsValuesSet,
  addItem,
  fireAddItem,
  fireDeleteItem,
}) {
  return (
    <div>
      <h3>Pantry</h3>
      <PantryList items={items} fireDeleteItem={fireDeleteItem} />
      <AddToPantry
        itemsValuesSet={itemsValuesSet}
        addItem={addItem}
        fireAddItem={fireAddItem}
      />
    </div>
  );
}
