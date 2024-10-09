import React from 'react'

const SearchBar = ({ query,setQuery,minDate,setMinDate,maxDate,setMaxDate }) => {
  return (
    <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type here to filter"/>
        <div>
        Min Date: <input type="date" value={minDate} onChange={(e) => setMinDate(e.target.value)}/>
        Max Date: <input type="date" value={maxDate} onChange={(e) => setMaxDate(e.target.value)}/>
        </div>
    </div>
   );
};

export default SearchBar