import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

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
      <h3 className="demo-header">valueExtractor (function)</h3>
      <p className="demo-label">
        Using <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">valueExtractor=&#123;(item) =&gt; item.sku&#125;</code>
      </p>
      <p className="demo-label">
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
              className={`sel-card sel-card--cyan${active ? ' active' : ''}`}
            >
              <div className="font-bold">{item.title}</div>
              <div className="text-xs opacity-70">{item.sku} · ${item.price}</div>
            </div>
          ),
        }}
      />
    </div>
  );
};
