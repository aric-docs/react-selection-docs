---
title: Getting Started
order: 0
---

# Getting Started

## Prerequisites

- React >= 16.8 (hooks support)
- `fast-deep-equal` (peer dependency)

## Installation

```bash
# npm
npm install @jswork/react-selection

# yarn
yarn add @jswork/react-selection

# pnpm
pnpm add @jswork/react-selection
```

## Data Requirements

Data items can have **any shape**. By default, ReactSelection uses the `value` field for selection identity. If your data uses a different field (like `id` or `sku`), use the `valueExtractor` prop:

```typescript
// Default: uses item.value
interface Fruit {
  value: string;
  label: string;
}

// Custom: uses item.id via valueExtractor="id"
interface User {
  id: number;
  name: string;
}

// Custom: uses a function via valueExtractor={(item) => item.sku}
interface Product {
  sku: string;
  title: string;
}
```

Your data array:

```tsx
const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];
```

## Basic Single Selection

The simplest usage — select one item from a list:

```tsx
import { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

function App() {
  const [selected, setSelected] = useState('apple');

  return (
    <ReactSelection
      data={items}
      value={selected}
      onChange={setSelected}
      slots={{
        item: ({ item, active, onClick }) => (
          <button
            style={{
              padding: '8px 16px',
              background: active ? '#1890ff' : '#fff',
              color: active ? '#fff' : '#333',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '8px',
            }}
            onClick={onClick}
          >
            {item.label}
          </button>
        ),
      }}
    />
  );
}
```

## Multiple Selection

Enable multi-select with the `multiple` prop:

```tsx
function App() {
  const [selected, setSelected] = useState([]);

  return (
    <ReactSelection
      multiple
      data={items}
      value={selected}
      onChange={setSelected}
      slots={{
        item: ({ item, active, onClick }) => (
          <button
            style={{
              padding: '8px 16px',
              background: active ? '#1890ff' : '#fff',
              color: active ? '#fff' : '#333',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '8px',
            }}
            onClick={onClick}
          >
            {active ? '✓ ' : ''}
            {item.label}
          </button>
        ),
      }}
    />
  );
}
```

## Controlled Component

ReactSelection is a **controlled component** — you manage the state via `value` and `onChange`:

```tsx
// Single selection
const [value, setValue] = useState(null);
<ReactSelection value={value} onChange={setValue} ... />

// Multiple selection (initial value should be an array)
const [value, setValue] = useState([]);
<ReactSelection multiple value={value} onChange={setValue} ... />
```

## Next Steps

- [Configuration](./configuration) — Explore all available props and slot types
- [Playground](/playground) — Interactive examples
- [Architecture](./architecture) — Learn how it works internally
