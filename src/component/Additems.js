import React from 'react';
import { FaPlus } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const Additems = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      {/* <label htmlFor='addItem' className='text-black '>ADD ITEMS </label> */}
      <input
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add Items'
        required
        className='rounded-md p-2 mb-4'
        value={newItem}
         onChange={(e)=>setNewItem(e.target.value)}
      />

     <button
      type='submit'
      aria-label='Add Item'
      className='bg-blue-500 text-white p-2 m-2 hover:scale-105 rounded'>
      <FaPlus />
     </button>
     
    </form>
  );
};

export default Additems;