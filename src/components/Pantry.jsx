import React from 'react';
import PT from 'prop-types';

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
  currentlySearched,
  fireSearchItems,
}) {
  return (
    <div>
      <h3>Pantry</h3>
      <PantryHeader
        fireItemFilter={fireItemFilter}
        currentlySearched={currentlySearched}
        fireSearchItems={fireSearchItems}
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

Pantry.propTypes = {
  items: PT.arrayOf(PT.shape({
    id: PT.number,
    name: PT.string,
    amount: PT.number,
    unit: PT.string,
    imageURL: PT.string,
  })),
  itemsValuesSet: PT.func.isRequired,
  addItem: PT.shape({
    name: PT.any,
    amount: PT.any,
    unit: PT.any,
    categoryID: PT.any,
  }),
  fireAddItem: PT.func.isRequired,
  fireDeleteItem: PT.func.isRequired,
  currentlySelectedSet: PT.func.isRequired,
  editItem: PT.shape({
    id: PT.any,
    name: PT.any,
    amount: PT.any,
    unit: PT.any,
    categoryID: PT.any,
  }),
  editValuesSet: PT.func.isRequired,
  resetEditValues: PT.func.isRequired,
  fireUpdateItem: PT.func.isRequired,
  fireItemFilter: PT.func.isRequired,
  currentlySearched: PT.string.isRequired,
  fireSearchItems: PT.func.isRequired,
}
