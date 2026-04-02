import React, { useState } from 'react';
import { ReactSelection, ErrorCode } from '@jswork/react-selection';

const items = [
  { value: 'mon', label: 'Monday' },
  { value: 'tue', label: 'Tuesday' },
  { value: 'wed', label: 'Wednesday' },
  { value: 'thu', label: 'Thursday' },
  { value: 'fri', label: 'Friday' },
  { value: 'sat', label: 'Saturday' },
  { value: 'sun', label: 'Sunday' },
];

export default () => {
  const [selected, setSelected] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  return (
    <div>
      <h3 className="demo-header">Max Limit (3)</h3>
      <p className="demo-label">
        Selected: <strong>{selected.length > 0 ? selected.join(', ') : 'None'}</strong>
        {' '}({selected.length}/3)
      </p>
      {errorMsg && <p className="mb-2 text-red-500">{errorMsg}</p>}
      <ReactSelection
        multiple
        max={3}
        data={items}
        value={selected}
        onChange={setSelected}
        onError={(err) => {
          if (err.code === ErrorCode.MAX_LIMIT_EXCEED) {
            setErrorMsg('You can only select up to 3 days!');
            setTimeout(() => setErrorMsg(''), 2000);
          }
        }}
        slots={{
          item: ({ item, active, disabled, onClick }) => (
            <button
              disabled={disabled}
              onClick={onClick}
              className={`sel-btn sel-btn--yellow${active ? ' active' : ''}`}
            >
              {active ? '✓ ' : ''}{item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
