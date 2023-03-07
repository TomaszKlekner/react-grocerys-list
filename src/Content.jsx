import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'Item One',
    },
    {
      id: 2,
      checked: false,
      item: 'Item Two',
    },
    {
      id: 3,
      checked: false,
      item: 'Item Three',
    },
  ]);

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" defaultChecked={item.checked} />
            <label htmlFor="">{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
