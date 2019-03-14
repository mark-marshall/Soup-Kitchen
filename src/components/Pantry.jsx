import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

import PantryHeader from './PantryHeader';
import PantryList from './PantryList';
import AddToPantry from './AddToPantry';
import soupStyles from '../styles/styles';

const PantryWrapper = styled.div`
background-color: ${lighten(0.65, soupStyles.color.success)};
border-radius: ${soupStyles.border.radiusSmall};
padding: ${soupStyles.padding.default};
`;

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
    <PantryWrapper>
      <PantryHeader
        fireItemFilter={fireItemFilter}
        currentlySearched={currentlySearched}
        fireSearchItems={fireSearchItems}
      />
      <AddToPantry
        itemsValuesSet={itemsValuesSet}
        addItem={addItem}
        fireAddItem={fireAddItem}
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
    </PantryWrapper>
  );
}

Pantry.propTypes = {
  items: PT.arrayOf(
    PT.shape({
      id: PT.number,
      name: PT.string,
      amount: PT.number,
      unit: PT.string,
      imageURL: PT.string,
    }),
  ),
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
};
