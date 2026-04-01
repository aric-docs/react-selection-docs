---
title: Architecture
order: 2
---

# Architecture

## Design Principles

ReactSelection is built on a few core principles:

### Headless by Design

ReactSelection renders **no wrapper DOM element** — it directly returns a `ReactList`. There is no CSS, no className, no extra DOM nodes. You have full control over the rendered output through slots.

### Composition over Inheritance

ReactSelection wraps `@jswork/react-list`, adding selection behavior to the list's slot system. It does not extend or subclass — it composes:

```
ReactSelection → ReactList → Your Slots
```

### Slot Forwarding

The user's `slots.item` is wrapped internally. Selection state (`active`, `disabled`, `onClick`) is injected before rendering:

1. ReactSelection receives your `slots.item`
2. For each data item, it computes selection state
3. It wraps your slot with the computed props (`active`, `disabled`, `onClick`)
4. The enhanced slot is passed to `ReactList`

## Internal Flow

### Value Extraction

`valueExtractor` serves a dual purpose — it extracts both the **selection identity** and **React keys** for the underlying list:

```
valueExtractor: 'value' (default)
  → item.value is used for selection comparison
  → item.value is used as React key

valueExtractor: 'id'
  → item.id is used for selection comparison
  → item.id is used as React key

valueExtractor: (item) => item.sku
  → item.sku is used for selection comparison
  → item.sku is used as React key
```

### Single Selection

```
User clicks item
  → onClick handler fires
    → If item is already selected and allowDeselect is true → deselect (value = null)
    → If item is not selected → select (value = extractedValue)
  → onChange callback fires with new value
```

### Multiple Selection

```
User clicks item
  → onClick handler fires
    → If item is already selected → remove from array
    → If item is not selected:
      → If current count >= max → fire onError (MAX_LIMIT_EXCEED)
      → Otherwise → add to array
  → onChange callback fires with new array
```

## Performance

- **Memoized handlers** — Selection handlers are memoized with `useCallback`
- **Deep equality** — State comparison uses `fast-deep-equal` for accurate change detection
- **Value extraction** — `valueExtractor` handles both selection identity and React keys in one pass

## Type System

```typescript
// valueExtractor type — string key or custom function
type ValueExtractor<T> = string | ((item: T) => any);

// Generic works with any data type
interface ReactSelectionProps<T> {
  data: T[];
  valueExtractor?: ValueExtractor<T>; // default: 'value'
  // ... other props
}

// Slot props are fully typed based on your data type
interface SelectionItemSlotProps<T> {
  item: T;
  index: number;
  data: T[];
  active: boolean;
  disabled: boolean;
  onClick: () => void;
}
```

## Dependencies

| Package              | Version | Purpose                              |
| -------------------- | ------- | ------------------------------------ |
| `react`              | peer    | UI framework                         |
| `fast-deep-equal`    | peer    | Deep equality comparison for state   |
| `@jswork/react-list` | ^2.0.0  | Base list component with slot system |

## Project Structure

```
react-selection/
├── packages/
│   ├── lib/
│   │   └── src/
│   │       └── index.tsx       # Main component
│   └── example/
│       └── src/
│           ├── App.tsx         # Demo entry
│           └── demos/          # Individual demo files
├── llms.txt                    # LLM context file
└── README.md
```
