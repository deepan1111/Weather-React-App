
import React, { useState } from 'react';
import Card from "../components/Card"
import SearchBar from "../components/SearchBar"
import { fetchWeather } from '../api';
import '../index.css';

function Home() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div className='h-screen flex items-center  justify-center '>
        <div className='bg-gray-300  p-8 rounded-lg shadow-lg max-w-sm w-full '>
      <SearchBar onSearch={handleSearch} />
      {weather && <Card weather={weather} />}
    </div>
    </div>
    
  );
}

export default Home;