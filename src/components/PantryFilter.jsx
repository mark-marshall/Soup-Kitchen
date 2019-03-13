import React from 'react';

export default function PantryFilter({
  fireItemFilter,
}) {
  return (
    <div>
      Filter by type:
      <select name="categoryID" onChange={fireItemFilter}>
        <option value="0">No Filter</option>
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
  );
}
