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
      <h3 className="demo-header">Empty State</h3>
      <button
        onClick={() => setHasData(!hasData)}
        className="mb-3 px-4 py-1.5 bg-blue-500 text-white text-[13px] border border-blue-500 rounded cursor-pointer"
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
              className={`sel-btn sel-btn--blue${active ? ' active' : ''}`}
            >
              {item.label}
            </button>
          ),
          empty: () => (
            <div className="py-6 text-center text-gray-400 border border-dashed border-gray-300 rounded-md">
              No items available. Click &quot;Load Data&quot; to add items.
            </div>
          ),
        }}
      />
    </div>
  );
};
