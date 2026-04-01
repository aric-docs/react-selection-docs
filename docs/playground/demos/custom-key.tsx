import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

const items = [
  { id: 1, value: 'tokyo', label: 'Tokyo' },
  { id: 2, value: 'paris', label: 'Paris' },
  { id: 3, value: 'london', label: 'London' },
  { id: 4, value: 'nyc', label: 'New York' },
];

export default () => {
  const [selected, setSelected] = useState('tokyo');

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>Custom Key Extractor</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Using <code>keyExtractor="id"</code> instead of default <code>item.value</code>
      </p>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected: <strong>{selected}</strong>
      </p>
      <ReactSelection
        data={items}
        keyExtractor="id"
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
                borderColor: active ? '#eb2f96' : '#d9d9d9',
                borderRadius: '6px',
                background: active ? '#eb2f96' : '#fff',
                color: active ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              <span style={{ marginRight: '4px', opacity: 0.6 }}>#{item.id}</span>
              {item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
