import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

import * as consts from '../consts/categoryConsts';
import soupStyles from '../styles/styles';

const PantryListWrapper = styled.div`
  margin-top: ${soupStyles.margin.mediumPlus};
  margin-bottom: ${soupStyles.margin.mediumPlus};
`;

const PantryListItemsWrapper = styled.div`
  display: ${soupStyles.display.default};
  justify-content: ${soupStyles.display.justifyQuart};
  margin-bottom: ${soupStyles.margin.smallPlus};

  p {
    width: ${soupStyles.width.item};
    font-size: ${soupStyles.fontSize.medium};
    text-transform: ${soupStyles.text.transformTertiary};
  }

  button {
    font-size: ${soupStyles.fontSize.medium};
    border-radius: ${soupStyles.border.radiusMedium};
    color: ${soupStyles.color.neutral};
    height: ${soupStyles.height.inputSmall};
    cursor: ${soupStyles.cursor.default};

    &:hover {
      background-color: ${darken(0.1, soupStyles.color.success)};
      border: 1px solid ${darken(0.1, soupStyles.color.success)};
    }
  }

  .edit {
    background-color: ${lighten(0.15, soupStyles.color.fun)};
    border: 1px solid ${lighten(0.15, soupStyles.color.fun)};

    &:hover {
      background-color: ${soupStyles.color.fun};
      border: 1px solid ${soupStyles.color.fun};
    }
  }

  .delete {
    width: ${soupStyles.width.xSmallButton};
    background-color: ${lighten(0.1, soupStyles.color.secondary)};
    border: 1px solid ${lighten(0.1, soupStyles.color.secondary)};

    &:hover {
      background-color: ${darken(0.1, soupStyles.color.secondary)};
      border: 1px solid ${darken(0.1, soupStyles.color.secondary)};
    }
  }
`;

const EditPantryWrapper = styled.div`
display: ${soupStyles.display.default};
  justify-content: ${soupStyles.display.justifyQuart};
  margin-bottom: ${soupStyles.margin.twentySplit};

  input {
    font-size: ${soupStyles.fontSize.medium};
    background-color: ${soupStyles.color.defaultSecondary};
    width: ${soupStyles.width.inputXSmall};
    height: ${soupStyles.height.inputSmall};
    border-radius: ${soupStyles.border.radiusSmall};
    padding: ${soupStyles.padding.input};
    margin-bottom: ${soupStyles.margin.smallPlus};
    border: 1px solid ${soupStyles.color.defaultSecondary};
    color: ${darken(0.1,soupStyles.color.fun)};

    &::placeholder {
      color: ${soupStyles.color.success};
      text-transform: ${soupStyles.text.transformSecondary};
    }
  }

  select {
    background-color: ${soupStyles.color.defaultSecondary};
    font-size: ${soupStyles.fontSize.small};
    width: ${soupStyles.width.select};
    padding: ${soupStyles.padding.input};
    height: ${soupStyles.height.inputSmall};
    color: ${darken(0.1,soupStyles.color.fun)};
    border: 1px solid ${soupStyles.color.defaultSecondary};
    margin-bottom: ${soupStyles.margin.smallPlus};
    text-transform: ${soupStyles.text.transformSecondary};
  }

  button {
    font-size: ${soupStyles.fontSize.medium};
    border-radius: ${soupStyles.border.radiusMedium};
    color: ${soupStyles.color.neutral};
    height: ${soupStyles.height.inputSmall};
    cursor: ${soupStyles.cursor.default};

    &:hover {
      background-color: ${darken(0.1, soupStyles.color.success)};
      border: 1px solid ${darken(0.1, soupStyles.color.success)};
    }
  }

  .edit {
    background-color: ${lighten(0.15, soupStyles.color.fun)};
    border: 1px solid ${lighten(0.15, soupStyles.color.fun)};

    &:hover {
      background-color: ${soupStyles.color.fun};
      border: 1px solid ${soupStyles.color.fun};
    }
  }

  .delete {
    width: ${soupStyles.width.xSmallButton};
    background-color: ${lighten(0.1, soupStyles.color.secondary)};
    border: 1px solid ${lighten(0.1, soupStyles.color.secondary)};

    &:hover {
      background-color: ${darken(0.1, soupStyles.color.secondary)};
      border: 1px solid ${darken(0.1, soupStyles.color.secondary)};
    }
`;

export default function PantryList({
  items,
  fireDeleteItem,
  currentlySelectedSet,
  editItem,
  editValuesSet,
  resetEditValues,
  fireUpdateItem,
}) {
  const itemsSorted = items.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <PantryListWrapper>
      {itemsSorted.map(item => {
        if (item.id === editItem.id) {
          return (
            <EditPantryWrapper key={item.id}>
              <div>
                <input
                  name="name"
                  placeholder="Ingredient"
                  value={editItem.name}
                  onChange={editValuesSet}
                />
              </div>
              <div>
                <input
                  name="amount"
                  placeholder="Amount"
                  value={editItem.amount}
                  onChange={editValuesSet}
                />
              </div>
              <div>
                <input
                  name="unit"
                  placeholder="Unit (optional)"
                  value={editItem.unit}
                  onChange={editValuesSet}
                />
              </div>
              <div>
                <select
                  name="categoryID"
                  value={editItem.categoryID}
                  onChange={editValuesSet}
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
              <button className="edit" onClick={() => fireUpdateItem(editItem)}>
                Edit
              </button>
              <button className="delete" onClick={resetEditValues}>
              ↵
              </button>
            </EditPantryWrapper>
          );
        } else {
          return (
            <PantryListItemsWrapper key={item.id}>
              <p>{item.name}</p>
              <p>{item.amount}</p>
              <p>{item.unit}</p>
              <p>{consts.categoryRefs[item.categoryID - 1]}</p>
              <button
                className="edit"
                onClick={() => currentlySelectedSet(item)}
              >
                Edit
              </button>
              <button
                className="delete"
                onClick={() => fireDeleteItem(item.id)}
              >
                x
              </button>
            </PantryListItemsWrapper>
          );
        }
      })}
    </PantryListWrapper>
  );
}

PantryList.propTypes = {
  items: PT.arrayOf(
    PT.shape({
      id: PT.number,
      name: PT.string,
      amount: PT.number,
      unit: PT.string,
      imageURL: PT.string,
    }),
  ),
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
};
