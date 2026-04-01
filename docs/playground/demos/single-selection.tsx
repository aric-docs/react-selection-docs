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
      <h3 style={{ marginBottom: '12px' }}>Single Selection</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
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
              style={{
                padding: '8px 20px',
                marginRight: '8px',
                marginBottom: '8px',
                border: '1px solid',
                borderColor: active ? '#1890ff' : '#d9d9d9',
                borderRadius: '6px',
                background: active ? '#1890ff' : '#fff',
                color: active ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              {item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
