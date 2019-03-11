import React from 'react';

export default function PantryList({ items, fireDeleteItem }) {
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

  const categoryRefs = ['Fruits', 'Vegetables', 'Utensils', 'Dairy', 'Proteins', 'Beverages', 'Dishware', 'Grains', 'Spices', 'Sauces']

  return (
    <ol>
      {itemsSorted.map(item => (
        <li key={item.id}>
          <p>{item.name}</p>
          <p>{item.amount}</p>
          <p>{item.unit}</p>
          <p>{categoryRefs[item.categoryID-1]}</p>
          <button>Edit</button>
          <button onClick={() => fireDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ol>
  );
}
