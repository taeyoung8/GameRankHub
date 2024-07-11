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
  return (
    <div>
        <span>Platform: <Select options={platformOptions}/></span>
        <span>Genre: <Select options={genreOptions}/></span>
        <span>Sort By: <Select options={sortOptions}></Select></span>
        <button>Search</button>
    </div>
  );
};

export default Home;
