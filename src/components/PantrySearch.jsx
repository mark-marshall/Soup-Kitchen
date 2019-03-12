import React from 'react';

export default function PantrySearch({
  currentlySearched,
  currentlySearchedValuesSet,
  fireSearchItems,
  fireItemSearchClear,
}) {
  return (
    <div>
      Search Ingredients:
      <input
        name="search"
        value={currentlySearched}
        onChange={currentlySearchedValuesSet}
      />
      <button onClick={() => fireSearchItems(currentlySearched)}>Search</button>
      <button onClick={fireItemSearchClear}>Clear</button>
    </div>
  );
}
