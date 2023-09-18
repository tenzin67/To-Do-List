import React, { useState } from 'react';

const Test= () => {
  const [items, seItems] = useState([
    {id:1,
    checked:false,
    items:'we are seling the food that is the best of it'
    },
    {id:2,
      checked:true,
      items:'thaklsjflksjdf;lkjsdf lk aslfj;lsd'
      },
    {id:3,
        checked:false,
        items:'we are selijflksdlkfj;sdljf;lsdjf;sdt'
      }
  ]);

  return (
    <div>
      <ul>
        {items.map((items)=>(
        <li className='items' key={items.id}>
          <input type='checkbox' checked={items.checked}/>
          <label>{items.items}</label>
          <button>Delete</button>

        </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
