import React from 'react';
import PT from 'prop-types';

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

PantrySearch.propTypes = {
  currentlySearched: PT.string.isRequired,
  fireSearchItems: PT.func.isRequired,
}
