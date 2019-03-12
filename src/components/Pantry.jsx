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
  currentlyFiltered,
  currentlyFilteredSet,
  fireItemFilterClear,
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
        currentlyFiltered={currentlyFiltered}
        currentlyFilteredSet={currentlyFilteredSet}
        fireItemFilterClear={fireItemFilterClear}
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
