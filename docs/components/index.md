---
title: ReactSelection
order: 0
---

# ReactSelection

A headless, type-safe selection component for React with slot-based architecture.

## When To Use

- You need single or multiple selection without being tied to a specific UI framework
- You want full control over the visual presentation of selection items
- You need type-safe selection with TypeScript generics
- You need configurable max selection limits with error handling

## Main Exports

| Export                   | Type      | Description                                |
| ------------------------ | --------- | ------------------------------------------ |
| `ReactSelection`         | Component | The main selection component               |
| `ReactSelectionProps`    | Interface | Props type for the component               |
| `SelectionItemSlotProps` | Interface | Props passed to the item slot              |
| `Slot`                   | Type      | Slot type (component, function, or object) |
| `ErrorCode`              | Enum      | Error codes for selection errors           |

## API

### ReactSelection Props

Extends `Omit<ReactListProps<T>, 'slots'>` plus:

| Property        | Description                                        | Type                                                        | Default                        |
| --------------- | -------------------------------------------------- | ----------------------------------------------------------- | ------------------------------ |
| `data`          | Array of data items (each must have `value` field) | `T[]`                                                       | -                              |
| `keyExtractor`  | Custom key for list items                          | `keyof T \| ((item: T, index: number) => string \| number)` | `item.value`                   |
| `allowDeselect` | Allow deselecting in single selection mode         | `boolean`                                                   | `false`                        |
| `max`           | Maximum selections allowed (multiple mode)         | `number`                                                    | `1000`                         |
| `multiple`      | Enable multiple selection                          | `boolean`                                                   | `false`                        |
| `value`         | Current selected value                             | `any`                                                       | `null` (or `[]` when multiple) |
| `onChange`      | Callback when selection changes                    | `(value: any) => void`                                      | -                              |
| `onError`       | Callback when an error occurs                      | `(error: { code: ErrorCode }) => void`                      | -                              |
| `slots`         | Slot configuration (see below)                     | `SelectionSlots<T>`                                         | -                              |

### SelectionItemSlotProps

Props received by the `slots.item` slot:

| Property   | Description                                 | Type         |
| ---------- | ------------------------------------------- | ------------ |
| `item`     | The current data item                       | `T`          |
| `index`    | Index in the data array                     | `number`     |
| `data`     | The full data array                         | `T[]`        |
| `active`   | Whether this item is currently selected     | `boolean`    |
| `disabled` | Whether this item is disabled (max reached) | `boolean`    |
| `onClick`  | Handler to select/deselect this item        | `() => void` |

### ErrorCode Enum

| Value              | Description                                             |
| ------------------ | ------------------------------------------------------- |
| `MAX_LIMIT_EXCEED` | Selection count has exceeded the configured `max` value |

### Slots Configuration

```typescript
interface SelectionSlots<T> {
  item: Slot<SelectionItemSlotProps<T>>; // Required
  empty?: Slot<{ data: T[] }>; // Optional
}
```

A `Slot` can be:

1. **Component**: `MyComponent`
2. **Render function**: `({ item, active, onClick }) => <button>...</button>`
3. **Object with props**: `{ component: MyComponent, props: { className: 'item' } }`

## Examples

### Single Selection

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

### Multiple Selection with Max Limit

```tsx
<ReactSelection
  multiple
  max={3}
  data={items}
  value={selectedItems}
  onChange={setSelectedItems}
  onError={(err) => {
    if (err.code === ErrorCode.MAX_LIMIT_EXCEED) {
      console.warn('Maximum selections reached');
    }
  }}
  slots={{
    item: ({ item, active, disabled, onClick }) => (
      <button disabled={disabled} onClick={onClick}>
        {active ? '✓ ' : ''}
        {item.label}
      </button>
    ),
  }}
/>
```

### With Empty State

```tsx
<ReactSelection
  data={items}
  value={selected}
  onChange={setSelected}
  slots={{
    item: ({ item, active, onClick }) => (
      <div onClick={onClick} className={active ? 'active' : ''}>
        {item.label}
      </div>
    ),
    empty: () => <div>No items available</div>,
  }}
/>
```
