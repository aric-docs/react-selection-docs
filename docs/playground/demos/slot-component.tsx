import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

const items = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'xlarge', label: 'X-Large' },
];

const SizeButton = ({ item, active, onClick }: any) => (
  <button
    onClick={onClick}
    className={`sel-btn sel-btn--pill sel-btn--purple${active ? ' active' : ''}`}
  >
    {active ? '● ' : '○ '}{item.label}
  </button>
);

export default () => {
  const [selected, setSelected] = useState('medium');

  return (
    <div>
      <h3 className="demo-header">Slot Component Reference</h3>
      <p className="demo-label">
        Selected: <strong>{selected}</strong>
      </p>
      <ReactSelection
        data={items}
        value={selected}
        onChange={setSelected}
        slots={{ item: SizeButton }}
      />
    </div>
  );
};
