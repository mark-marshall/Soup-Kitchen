import React from 'react';

import PantryFilter from './PantryFilter';
import PantrySearch from './PantrySearch';

export default function PantryHeader({
  fireItemFilter,
  currentlySearched,
  fireSearchItems,
}) {
  return (
    <div>
      <PantryFilter
        fireItemFilter={fireItemFilter}
      />
      <PantrySearch
        currentlySearched={currentlySearched}
        fireSearchItems={fireSearchItems}
      />
    </div>
  );
}
