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
      <h3 style={{ marginBottom: '12px' }}>Multiple Selection</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
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
              style={{
                padding: '8px 20px',
                marginRight: '8px',
                marginBottom: '8px',
                border: '1px solid',
                borderColor: active ? '#52c41a' : '#d9d9d9',
                borderRadius: '6px',
                background: active ? '#52c41a' : '#fff',
                color: active ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              {active ? '☑ ' : '☐ '}{item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
