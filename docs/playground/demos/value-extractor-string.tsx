import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

// Data without a `value` field — use `id` instead
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Diana' },
];

export default () => {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>valueExtractor (string)</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Using <code>valueExtractor="id"</code> — data has no <code>value</code> field
      </p>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected ID: <strong>{selectedId}</strong>
      </p>
      <ReactSelection
        data={users}
        valueExtractor="id"
        value={selectedId}
        onChange={setSelectedId}
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
              {item.name}
            </button>
          ),
        }}
      />
    </div>
  );
};
