import React from 'react';

import PantryHeader from './PantryHeader';
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
  fireItemFilter,
  currentlySearchedValuesSet,
  fireSearchItems,
  fireItemSearchClear,
  currentlySearched,
}) {
  return (
    <div>
      <h3>Pantry</h3>
      <PantryHeader
        fireItemFilter={fireItemFilter}
        currentlySearchedValuesSet={currentlySearchedValuesSet}
        fireSearchItems={fireSearchItems}
        fireItemSearchClear={fireItemSearchClear}
        currentlySearched={currentlySearched}
      />
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
