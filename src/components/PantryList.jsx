import React from 'react';

import * as consts from '../consts/consts';

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
    <ol>
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
                <select name="categoryID">
                  <option selected={item.categoryID === 1} value="1">
                    Fruits
                  </option>
                  <option selected={item.categoryID === 2} value="2">
                    Vegetables
                  </option>
                  <option selected={item.categoryID === 3} value="3">
                    Utensils
                  </option>
                  <option selected={item.categoryID === 4} value="4">
                    Dairy
                  </option>
                  <option selected={item.categoryID === 5} value="5">
                    Proteins
                  </option>
                  <option selected={item.categoryID === 6} value="6">
                    Beverages
                  </option>
                  <option selected={item.categoryID === 7} value="7">
                    Dishware
                  </option>
                  <option selected={item.categoryID === 8} value="8">
                    Grains
                  </option>
                  <option selected={item.categoryID === 9} value="9">
                    Spices
                  </option>
                  <option selected={item.categoryID === 10} value="10">
                    Sauces
                  </option>
                </select>
              </div>
              <button onClick={() => fireUpdateItem(editItem)}>Edit Item</button>
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
    </ol>
  );
}
