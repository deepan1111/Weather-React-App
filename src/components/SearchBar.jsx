import React, { useState } from "react";


const Search = ({onSearch}) =>{

    const [city,setCity] = useState('');
    const handleSearch = ()=>{
        onSearch(city);
        setCity('')
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
      };
    
    return (
    <div className="flex ">
       <input className="w-[400px] p-3 text-center border-r-2" type="text" value={city}  onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress} placeholder="Enter the City !!" />

       {/* <button className="mt-4 w-[200px] mb-4" type="submit" onClick={handleSearch}>Submit</button> */}
    </div>
    
    )
}

export default Search