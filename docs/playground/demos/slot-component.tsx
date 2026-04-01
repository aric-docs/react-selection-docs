import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

const items = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'xlarge', label: 'X-Large' },
];

// Standalone component for the item slot
const SizeButton = ({ item, active, onClick, className }: any) => (
  <button
    onClick={onClick}
    className={className}
    style={{
      padding: '8px 20px',
      marginRight: '8px',
      marginBottom: '8px',
      border: '1px solid',
      borderColor: active ? '#722ed1' : '#d9d9d9',
      borderRadius: '20px',
      background: active ? '#722ed1' : '#fff',
      color: active ? '#fff' : '#333',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.2s',
    }}
  >
    {active ? '● ' : '○ '}{item.label}
  </button>
);

export default () => {
  const [selected, setSelected] = useState('medium');

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>Slot Component Reference</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected: <strong>{selected}</strong>
      </p>
      <ReactSelection
        data={items}
        value={selected}
        onChange={setSelected}
        slots={{
          item: { component: SizeButton, props: { className: 'size-btn' } },
        }}
      />
    </div>
  );
};
