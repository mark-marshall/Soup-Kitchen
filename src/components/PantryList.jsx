import React from 'react';
import PT from 'prop-types';

import * as consts from '../consts/categoryConsts';

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
    <ul>
      {itemsSorted.map(item => {
        if (item.id === editItem.id) {
          return (
            <div key={item.id}>
              <div>
                Ingredient:{' '}
                <input
                  name="name"
                  value={editItem.name}
                  onChange={editValuesSet}
                />
              </div>
              <div>
                Amount:{' '}
                <input
                  name="amount"
                  value={editItem.amount}
                  onChange={editValuesSet}
                />
              </div>
              <div>
                Unit (optional):{' '}
                <input
                  name="unit"
                  value={editItem.unit}
                  onChange={editValuesSet}
                />
              </div>
              <div>
                Category:
                <select name="categoryID" value={editItem.categoryID} onChange={editValuesSet}>
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
              <button onClick={() => fireUpdateItem(editItem)}>
                Edit Item
              </button>
              <button onClick={resetEditValues}>Cancel</button>
            </div>
          );
        } else {
          return (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.amount}</p>
              <p>{item.unit}</p>
              <p>{consts.categoryRefs[item.categoryID - 1]}</p>
              <button onClick={() => currentlySelectedSet(item)}>Edit</button>
              <button onClick={() => fireDeleteItem(item.id)}>Delete</button>
            </li>
          );
        }
      })}
    </ul>
  );
}

PantryList.propTypes = {
  items: PT.arrayOf(PT.shape({
    id: PT.number,
    name: PT.string,
    amount: PT.number,
    unit: PT.string,
    imageURL: PT.string,
  })),
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
}
