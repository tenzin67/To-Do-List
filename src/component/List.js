import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const List = ({ items, handleCheck, handleDelete }) => {
  return (
    <div>
      <ul className="flex flex-col space-y-2 ">
        {items.map((item) => (
          <li className="flex items-center bg-pink-200 p-2 rounded" key={item.id}>
            <div className="flex-1">
              <input
                type="checkbox"
                className="form-checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                className={`ml-2 ${item.checked ? 'line-through' : ''}`}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.items}
              </label>
            </div>
            <div>
              <FaTrashAlt
                role="button"
                tabIndex={0}
                className="text-red-500 cursor-pointer mr-2"
                onClick={() => handleDelete(item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
