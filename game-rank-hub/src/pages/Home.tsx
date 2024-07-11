// src/pages/Home.tsx
import React from 'react';
import Select from 'react-select'

const platformOptions = [
    {value: 'all', label: 'All'},
    {value: 'steam', label: 'Steam'},
]

const genreOptions = [
    {value: 'all', label: 'All'},
    {value: 'fps', label: 'FPS'},
]

const sortOptions = [
    {value: 'rating', label: 'Rating'},
    {value: 'totalPlayers', label: 'Total Players'},
]

const Home: React.FC = () => {

  const platformDefault = platformOptions[0];
  const genreDefault = genreOptions[0];
  const sortDefault = sortOptions[0];

  return (
    <div>
        <span>Platform: <Select options={platformOptions } defaultValue={platformDefault}/></span>
        <span>Genre: <Select options={genreOptions} defaultValue={genreDefault}/></span>
        <span>Sort By: <Select options={sortOptions} defaultValue={sortDefault}></Select></span>
        <button>Search</button>
    </div>
  );
};

export default Home;
