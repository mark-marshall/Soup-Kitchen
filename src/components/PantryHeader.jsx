import React from 'react';

import PantryFilter from './PantryFilter';
import PantrySearch from './PantrySearch';

export default function PantryHeader({
  fireItemFilter,
  currentlySearchedValuesSet,
  fireSearchItems,
  fireItemSearchClear,
  currentlySearched,
}) {
  return (
    <div>
      <PantryFilter
        fireItemFilter={fireItemFilter}
      />
      <PantrySearch
        currentlySearchedValuesSet={currentlySearchedValuesSet}
        fireSearchItems={fireSearchItems}
        fireItemSearchClear={fireItemSearchClear}
        currentlySearched={currentlySearched}
      />
    </div>
  );
}
