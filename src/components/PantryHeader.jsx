import React from 'react';

import PantryFilter from './PantryFilter';
import PantrySearch from './PantrySearch';

export default function PantryHeader({
  fireItemFilter,
  currentlyFiltered,
  currentlyFilteredSet,
  fireItemFilterClear,
  currentlySearchedValuesSet,
  fireSearchItems,
  fireItemSearchClear,
  currentlySearched,
}) {
  return (
    <div>
      <PantryFilter
        fireItemFilter={fireItemFilter}
        currentlyFiltered={currentlyFiltered}
        currentlyFilteredSet={currentlyFilteredSet}
        fireItemFilterClear={fireItemFilterClear}
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
