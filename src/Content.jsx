import { FaTrashAlt } from 'react-icons/fa';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
              <input
                type='checkbox'
                defaultChecked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role='button'
                tabIndex='0'
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no items</p>
      )}
    </main>
  );
};

export default Content;
