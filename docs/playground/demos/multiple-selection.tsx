import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

const items = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'SolidJS' },
];

export default () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h3 className="demo-header">Multiple Selection</h3>
      <p className="demo-label">
        Selected: <strong>{selected.length > 0 ? selected.join(', ') : 'None'}</strong>
      </p>
      <ReactSelection
        multiple
        data={items}
        value={selected}
        onChange={setSelected}
        slots={{
          item: ({ item, active, onClick }) => (
            <button
              onClick={onClick}
              className={`sel-btn sel-btn--green${active ? ' active' : ''}`}
            >
              {active ? '☑ ' : '☐ '}{item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
