import React from 'react';

export default function PantrySearch({
  currentlySearched,
  fireSearchItems,
}) {
  return (
    <div>
      Search ingredients:
      <input
        name="search"
        value={currentlySearched}
        onChange={fireSearchItems}
      />
    </div>
  );
}
