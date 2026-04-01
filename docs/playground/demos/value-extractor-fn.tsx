import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

// Data with a `sku` field — use a function to extract it
const products = [
  { sku: 'A-001', title: 'Widget', price: 9.99 },
  { sku: 'B-002', title: 'Gadget', price: 19.99 },
  { sku: 'C-003', title: 'Doohickey', price: 29.99 },
  { sku: 'D-004', title: 'Thingamajig', price: 39.99 },
];

export default () => {
  const [selected, setSelected] = useState('A-001');

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>valueExtractor (function)</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Using <code>valueExtractor=&#123;(item) =&gt; item.sku&#125;</code>
      </p>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected SKU: <strong>{selected || 'None'}</strong>
      </p>
      <ReactSelection
        data={products}
        valueExtractor={(item) => item.sku}
        value={selected}
        onChange={setSelected}
        slots={{
          item: ({ item, active, onClick }) => (
            <div
              onClick={onClick}
              style={{
                display: 'inline-block',
                padding: '10px 16px',
                marginRight: '8px',
                marginBottom: '8px',
                border: '1px solid',
                borderColor: active ? '#13c2c2' : '#d9d9d9',
                borderRadius: '8px',
                background: active ? '#13c2c2' : '#fff',
                color: active ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ fontWeight: 'bold' }}>{item.title}</div>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>
                {item.sku} · ${item.price}
              </div>
            </div>
          ),
        }}
      />
    </div>
  );
};
