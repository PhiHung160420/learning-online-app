import { SearchComponent } from 'components';
import { navigate } from 'navigation/service';
import React, { useState } from 'react'
import screenNames from 'utils/screenName';

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedTopSearch, setSelectedTopSearch] = useState(null);

  const onPressCategoryCard = (category: any) => {
    navigate(screenNames.COURSE_SCREEN, category);
  };

  return (
    <SearchComponent 
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      selectedTopSearch={selectedTopSearch}
      setSelectedTopSearch={setSelectedTopSearch}
      onPressCategoryCard={onPressCategoryCard}
    />
  )
}

export default SearchScreen