import React, { useState } from 'react';
import Additems from './component/Additems';
import List from './component/List';
import Search from './component/SearchItem';
import 'tailwindcss/tailwind.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, items: 'itemnumber 1' },
    { id: 2, checked: false, items: 'itemnumber 2' },
    { id: 3, checked: false, items: 'itemnumber 3' }
  ]);

  const [newItem, setNewItem] = useState('');

  const [ search,setSearch]=useState('')

  const handleCheck = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setItems([...items, { id: items.length + 1, checked: false, items: newItem }]);
    setNewItem('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-200 p-5 m-5rounded-lg shadow-md border border-gray-400">
        <h1 className="text-2xl font-bold mb-5 ">To-Do List</h1>
        
        <Additems 
        newItem={newItem} 
        setNewItem={setNewItem} 
        handleSubmit={handleSubmit} 
        />

        < Search 
        search={search} 
        setSearch={setSearch}
        />

        <List 
        items={items.filter(items=>((items.items).toLowerCase()).includes(search.toLowerCase()))} 
        handleCheck={handleCheck} 
        handleDelete={handleDelete} 
        />

      </div>
    </div>
  );
}

export default App;
