import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

const items = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
];

export default () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>Allow Deselect</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected: <strong>{selected || 'None (click again to deselect)'}</strong>
      </p>
      <ReactSelection
        allowDeselect
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
                borderColor: active ? item.value : '#d9d9d9',
                borderRadius: '6px',
                background: active ? item.value : '#fff',
                color: active ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              {active ? '✓ ' : ''}{item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
