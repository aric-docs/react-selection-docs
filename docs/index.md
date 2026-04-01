---
title: ReactSelection
hero:
  title: ReactSelection
  description: A headless, type-safe selection component for React with slot-based architecture.
  actions:
    - text: Get Started
      link: /guide/getting-started
    - text: API Reference
      link: /components
    - text: GitHub
      link: https://github.com/aric-tpls/react-selection-docs
features:
  - title: Headless / Unstyled
    emoji: 🎨
    description: No DOM wrapper, no CSS — renders exactly what your slots return. Full control over presentation.
  - title: Slot-based Architecture
    emoji: 🧩
    description: Flexible slot system with typed props for item rendering. Use components, render functions, or both.
  - title: Single & Multiple Selection
    emoji: ✅
    description: Toggle between single and multiple selection via the `multiple` prop. Supports allow deselect.
  - title: Type-safe Generics
    emoji: 🔒
    description: Full TypeScript support with `<T extends { value: any }>` ensures data integrity throughout.
  - title: Max Limit Control
    emoji: 📊
    description: Configurable maximum for multiple selection with error callback when limit is exceeded.
  - title: Built on ReactList
    emoji: 🏗️
    description: Inherits all ReactListProps (data, keyExtractor, etc.) and adds selection behavior on top.
---

## Installation

```bash
# npm
npm install @jswork/react-selection

# yarn
yarn add @jswork/react-selection

# pnpm
pnpm add @jswork/react-selection
```

## Quick Start

```tsx
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
            className={active ? 'btn-primary' : 'btn-default'}
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

## Documentation

- [Getting Started](/guide/getting-started) - Installation and basic usage
- [API Reference](/components) - Full component API documentation
- [Playground](/playground) - Interactive examples and demos
- [Architecture](/guide/architecture) - Design decisions and internals
