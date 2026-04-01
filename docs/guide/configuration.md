---
title: Configuration
order: 1
---

# Configuration

## ReactSelection Props

ReactSelection extends `Omit<ReactListProps<T>, 'slots'>` with the following selection-specific props:

### Selection Props

| Property        | Description                                        | Type                                   | Default                        |
| --------------- | -------------------------------------------------- | -------------------------------------- | ------------------------------ |
| `allowDeselect` | Allow deselecting in single selection mode         | `boolean`                              | `false`                        |
| `max`           | Maximum selections allowed (multiple mode)         | `number`                               | `1000`                         |
| `multiple`      | Enable multiple selection                          | `boolean`                              | `false`                        |
| `value`         | Current selected value                             | `any`                                  | `null` (or `[]` when multiple) |
| `onChange`      | Callback when selection changes                    | `(value: any) => void`                 | -                              |
| `onError`       | Callback when an error occurs (e.g., max exceeded) | `(error: { code: ErrorCode }) => void` | -                              |
| `slots`         | Slot configuration for rendering                   | `SelectionSlots<T>`                    | -                              |

### Inherited from ReactList

| Property       | Description                                   | Type                                                        | Default      |
| -------------- | --------------------------------------------- | ----------------------------------------------------------- | ------------ |
| `data`         | Array of data items (must have `value` field) | `T[]`                                                       | -            |
| `keyExtractor` | Custom key for list items                     | `keyof T \| ((item: T, index: number) => string \| number)` | `item.value` |

## Slots

The `slots` prop controls how items are rendered. It accepts the following slot entries:

### `slots.item` (required)

The main slot for rendering each selection item. Receives `SelectionItemSlotProps`:

| Property   | Description                                 | Type         |
| ---------- | ------------------------------------------- | ------------ |
| `item`     | The current data item                       | `T`          |
| `index`    | Index in the data array                     | `number`     |
| `data`     | The full data array                         | `T[]`        |
| `active`   | Whether this item is currently selected     | `boolean`    |
| `disabled` | Whether this item is disabled (max reached) | `boolean`    |
| `onClick`  | Handler to select/deselect this item        | `() => void` |

### `slots.empty` (optional)

Rendered when the data array is empty. Receives `{ data: T[] }`.

## Slot Forms

A slot can be provided in three forms:

### 1. Component Reference

Pass a React component directly:

```tsx
const ItemSlot = ({ item, active, onClick }: SelectionItemSlotProps<Fruit>) => (
  <button className={active ? 'active' : ''} onClick={onClick}>
    {item.label}
  </button>
);

<ReactSelection
  data={items}
  value={selected}
  onChange={setSelected}
  slots={{ item: ItemSlot }}
/>;
```

### 2. Render Function

Use an inline render function:

```tsx
<ReactSelection
  data={items}
  value={selected}
  onChange={setSelected}
  slots={{
    item: ({ item, active, onClick }) => (
      <button onClick={onClick}>{item.label}</button>
    ),
  }}
/>
```

### 3. Component with Default Props

Pass a component with additional props merged in:

```tsx
<ReactSelection
  data={items}
  value={selected}
  onChange={setSelected}
  slots={{
    item: { component: ItemSlot, props: { className: 'btn-sm' } },
  }}
/>
```

## ErrorCode

The `onError` callback receives an object with a `code` property:

```typescript
enum ErrorCode {
  MAX_LIMIT_EXCEED = 'MAX_LIMIT_EXCEED',
}
```

### Handling Errors

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
  slots={{ item: ItemSlot }}
/>
```

## Key Extractor

By default, keys are derived from `item.value`. You can customize this with `keyExtractor`:

### String Key

```tsx
const items = [
  { id: 1, value: 'apple', label: 'Apple' },
  { id: 2, value: 'banana', label: 'Banana' },
];

<ReactSelection
  data={items}
  keyExtractor="id"
  value={selected}
  onChange={setSelected}
  slots={{ item: ItemSlot }}
/>;
```

### Function Key

```tsx
<ReactSelection
  data={items}
  keyExtractor={(item, index) => `fruit-${item.value}`}
  value={selected}
  onChange={setSelected}
  slots={{ item: ItemSlot }}
/>
```
