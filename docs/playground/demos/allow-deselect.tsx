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
      <h3 className="demo-header">Allow Deselect</h3>
      <p className="demo-label">
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
              className={`sel-btn${active ? ' active' : ''}`}
              style={active ? { background: item.value, borderColor: item.value, color: '#fff' } : undefined}
            >
              {active ? '✓ ' : ''}{item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
