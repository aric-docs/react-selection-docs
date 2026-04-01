import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

export default () => {
  const [selected, setSelected] = useState(null);
  const [hasData, setHasData] = useState(false);

  const items = hasData
    ? [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
      ]
    : [];

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>Empty State</h3>
      <button
        onClick={() => setHasData(!hasData)}
        style={{
          marginBottom: '12px',
          padding: '6px 16px',
          border: '1px solid #1890ff',
          borderRadius: '4px',
          background: '#1890ff',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '13px',
        }}
      >
        {hasData ? 'Clear Data' : 'Load Data'}
      </button>
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
                border: '1px solid',
                borderColor: active ? '#1890ff' : '#d9d9d9',
                borderRadius: '6px',
                background: active ? '#1890ff' : '#fff',
                color: active ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              {item.label}
            </button>
          ),
          empty: () => (
            <div
              style={{
                padding: '24px',
                textAlign: 'center',
                color: '#999',
                border: '1px dashed #d9d9d9',
                borderRadius: '6px',
              }}
            >
              No items available. Click "Load Data" to add items.
            </div>
          ),
        }}
      />
    </div>
  );
};
