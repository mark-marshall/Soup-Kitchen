import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import soupStyles from '../styles/styles';

const AddToPantryHeader = styled.h1`
  font-size: ${soupStyles.fontSize.medium};
  text-transform: ${soupStyles.text.transformSecondary};
`;

const AddToPantryWrapper = styled.div`
  display: ${soupStyles.display.default};
  justify-content: ${soupStyles.display.justifyQuart};
  margin-top: ${soupStyles.margin.medium};
  height: 100px;

  input {
    font-size: ${soupStyles.fontSize.medium};
    background-color: ${soupStyles.color.defaultSecondary};
    width: ${soupStyles.width.inputSmall};
    height: ${soupStyles.height.inputSmall};
    border-radius: ${soupStyles.border.radiusSmall};
    padding: ${soupStyles.padding.input};
    margin-bottom: ${soupStyles.margin.medium};
    border: 1px solid ${soupStyles.color.defaultSecondary};

    &::placeholder {
      color: ${soupStyles.color.success};
      text-transform: ${soupStyles.text.transformSecondary};
    }
  }

  select {
    background-color: ${soupStyles.color.defaultSecondary};
    font-size: ${soupStyles.fontSize.small};
    width: ${soupStyles.width.inputSmall};
    padding: ${soupStyles.padding.input};
    height: ${soupStyles.height.inputSmall};
    color: ${soupStyles.color.success};
    border: 1px solid ${soupStyles.color.defaultSecondary};
    margin-bottom: ${soupStyles.margin.medium};
    text-transform: ${soupStyles.text.transformSecondary};
  }

  button {
    background-color: ${soupStyles.color.success};
    border: 1px solid ${soupStyles.color.success};
    font-size: ${soupStyles.fontSize.medium};
    border-radius: ${soupStyles.border.radiusMedium};
    color: ${soupStyles.color.neutral};
    height: ${soupStyles.height.inputSmall};
    width: ${soupStyles.width.xSmallButton};
    margin-bottom: ${soupStyles.margin.large};
    cursor: ${soupStyles.cursor.default};

    &:hover {
      background-color: ${darken(0.1, soupStyles.color.success)};
      border: 1px solid ${darken(0.1, soupStyles.color.success)};
    }
  }
`;

export default function AddToPantry({ itemsValuesSet, addItem, fireAddItem }) {
  return (
    <div>
      <AddToPantryHeader>Add an item...</AddToPantryHeader>
      <AddToPantryWrapper>
        <div>
          <input
            name="name"
            placeholder="Ingredient"
            value={addItem.name}
            onChange={itemsValuesSet}
          />
        </div>
        <div>
          <input
            name="amount"
            placeholder="Amount"
            value={addItem.amount}
            onChange={itemsValuesSet}
          />
        </div>
        <div>
          <input
            name="unit"
            placeholder="Unit (optional)"
            type="number"
            value={addItem.unit}
            onChange={itemsValuesSet}
          />
        </div>
        <div>
          <select
            name="categoryID"
            value={addItem.categoryID}
            onChange={itemsValuesSet}
          >
            <option disable="true">Choose a type</option>
            <option value="1">Fruits</option>
            <option value="2">Vegetables</option>
            <option value="3">Utensils</option>
            <option value="4">Dairy</option>
            <option value="5">Proteins</option>
            <option value="6">Beverages</option>
            <option value="7">Dishware</option>
            <option value="8">Grains</option>
            <option value="9">Spices</option>
            <option value="10">Sauces</option>
          </select>
        </div>
        <button onClick={() => fireAddItem(addItem)}>+</button>
      </AddToPantryWrapper>
    </div>
  );
}

AddToPantry.propTypes = {
  itemsValuesSet: PT.func.isRequired,
  addItem: PT.shape({
    name: PT.any,
    amount: PT.any,
    unit: PT.any,
    categoryID: PT.any,
  }),
  fireAddItem: PT.func.isRequired,
};
