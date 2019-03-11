import React from 'react';

import PantryList from './PantryList';
import AddToPantry from './AddToPantry';

export default function Pantry({
  items,
  itemsValuesSet,
  addItem,
  fireAddItem,
  fireDeleteItem,
  currentlySelectedSet,
  editItem,
  editValuesSet,
  resetEditValues,
  fireUpdateItem,
}) {
  return (
    <div>
      <h3>Pantry</h3>
      <PantryList
        items={items}
        fireDeleteItem={fireDeleteItem}
        currentlySelectedSet={currentlySelectedSet}
        editItem={editItem} 
        editValuesSet={editValuesSet}
        resetEditValues={resetEditValues}
        fireUpdateItem={fireUpdateItem}
      />
      <AddToPantry
        itemsValuesSet={itemsValuesSet}
        addItem={addItem}
        fireAddItem={fireAddItem}
      />
    </div>
  );
}
