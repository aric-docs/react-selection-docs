---
title: Configuration
order: 1
---

# Configuration

## ReactSelection Props

ReactSelection extends `Omit<ReactListProps<T>, 'slots' | 'keyExtractor'>` with the following selection-specific props:

### Selection Props

| Property         | Description                                        | Type                                   | Default                        |
| ---------------- | -------------------------------------------------- | -------------------------------------- | ------------------------------ |
| `allowDeselect`  | Allow deselecting in single selection mode         | `boolean`                              | `false`                        |
| `max`            | Maximum selections allowed (multiple mode)         | `number`                               | `1000`                         |
| `multiple`       | Enable multiple selection                          | `boolean`                              | `false`                        |
| `value`          | Current selected value                             | `any`                                  | `null` (or `[]` when multiple) |
| `valueExtractor` | How to extract selection identity from data items  | `string \| ((item: T) => any)`         | `'value'`                      |
| `onChange`       | Callback when selection changes                    | `(value: any) => void`                 | -                              |
| `onError`        | Callback when an error occurs (e.g., max exceeded) | `(error: { code: ErrorCode }) => void` | -                              |
| `slots`          | Slot configuration for rendering                   | `SelectionSlots<T>`                    | -                              |

### Inherited from ReactList

| Property | Description                     | Type  | Default |
| -------- | ------------------------------- | ----- | ------- |
| `data`   | Array of data items (any shape) | `T[]` | -       |

## valueExtractor

The `valueExtractor` prop tells the component how to identify each item for selection. It also serves as the React key for the underlying list. This replaces the separate `keyExtractor` prop — one config handles both.

### Type

```typescript
type ValueExtractor<T> = string | ((item: T) => any);
```

### Default Behavior

By default, `valueExtractor` is `'value'`, so it reads `item.value`:

```tsx
const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
];

// No valueExtractor needed — uses item.value by default
<ReactSelection
  data={items}
  value={selected}
  onChange={setSelected}
  slots={{ item: ItemSlot }}
/>;
```

### String Key

When your data items don't have a `value` field, specify which field to use:

```tsx
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

<ReactSelection
  data={users}
  valueExtractor="id"
  value={selectedId}
  onChange={setSelectedId}
  slots={{ item: ItemSlot }}
/>;
```

### Function Extractor

For more complex extraction logic, use a function:

```tsx
const products = [
  { sku: 'A-001', title: 'Widget' },
  { sku: 'B-002', title: 'Gadget' },
];

<ReactSelection
  data={products}
  valueExtractor={(item) => item.sku}
  value={selected}
  onChange={setSelected}
  slots={{ item: ItemSlot }}
/>;
```

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
