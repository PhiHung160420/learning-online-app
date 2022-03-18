import { SearchComponent } from 'components';
import React, { useState } from 'react'

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedTopSearch, setSelectedTopSearch] = useState(null);

  return (
    <SearchComponent 
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      selectedTopSearch={selectedTopSearch}
      setSelectedTopSearch={setSelectedTopSearch}
    />
  )
}

export default SearchScreen