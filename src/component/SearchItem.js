import React from 'react'
import 'tailwindcss/tailwind.css';
const Search = ({Search,setSearch}) => {
  return (
    <form className='SearchForm' onSubmit={(e)=>e.preventDefault()}>
      
      <input 
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Items'
        className='rounded p-2 mb-4'
        value={Search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <label htmlFor='search' className='m-2'>Search</label>

    </form>
  )
}

export default Search
