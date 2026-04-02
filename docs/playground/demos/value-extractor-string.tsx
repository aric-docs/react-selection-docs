import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

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
      <h3 className="demo-header">valueExtractor (string)</h3>
      <p className="demo-label">
        Using <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">valueExtractor="id"</code>
      </p>
      <p className="demo-label">
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
              className={`sel-btn sel-btn--pink${active ? ' active' : ''}`}
            >
              <span className="mr-1 opacity-50">#{item.id}</span>
              {item.name}
            </button>
          ),
        }}
      />
    </div>
  );
};
