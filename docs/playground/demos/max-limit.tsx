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
      <h3 style={{ marginBottom: '12px' }}>Max Limit (3)</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected: <strong>{selected.length > 0 ? selected.join(', ') : 'None'}</strong>
        {' '}({selected.length}/3)
      </p>
      {errorMsg && (
        <p style={{ color: '#ff4d4f', marginBottom: '8px' }}>{errorMsg}</p>
      )}
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
              style={{
                padding: '8px 20px',
                marginRight: '8px',
                marginBottom: '8px',
                border: '1px solid',
                borderColor: active ? '#faad14' : disabled ? '#f0f0f0' : '#d9d9d9',
                borderRadius: '6px',
                background: active ? '#faad14' : disabled ? '#f5f5f5' : '#fff',
                color: active ? '#fff' : disabled ? '#bbb' : '#333',
                cursor: disabled ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              {active ? '✓ ' : ''}{item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
