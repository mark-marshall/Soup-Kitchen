import React from 'react';
import PT from 'prop-types';

export default function AddToPantry({ itemsValuesSet, addItem, fireAddItem }) {
  return (
    <div>
      <div>
        Ingredient:{' '}
        <input name="name" value={addItem.name} onChange={itemsValuesSet} />
      </div>
      <div>
        Amount:{' '}
        <input name="amount" value={addItem.amount} onChange={itemsValuesSet} />
      </div>
      <div>
        Unit (optional):{' '}
        <input name="unit" value={addItem.unit} onChange={itemsValuesSet} />
      </div>
      <div>
        Category:
        <select name="categoryID" value={addItem.categoryID} onChange={itemsValuesSet} >
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
      <button onClick={() => fireAddItem(addItem)}>Add Item</button>
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
}
