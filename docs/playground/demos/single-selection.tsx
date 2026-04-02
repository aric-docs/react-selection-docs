import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

export default () => {
  const [selected, setSelected] = useState('apple');

  return (
    <div>
      <h3 className="demo-header">Single Selection</h3>
      <p className="demo-label">
        Selected: <strong>{selected || 'None'}</strong>
      </p>
      <ReactSelection
        data={items}
        value={selected}
        onChange={setSelected}
        slots={{
          item: ({ item, active, onClick }) => (
            <button
              onClick={onClick}
              className={`sel-btn sel-btn--blue${active ? ' active' : ''}`}
            >
              {item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
