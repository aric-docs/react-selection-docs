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

### Single Selection

```
User clicks item
  → onClick handler fires
    → If item is already selected and allowDeselect is true → deselect (value = null)
    → If item is not selected → select (value = item.value)
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
- **Key handling** — Keys default to `item.value`, falling back to `index` for React's reconciliation

## Type System

```typescript
// The generic constraint ensures data items have a value field
interface ReactSelectionProps<T extends { value: any }> {
  data: T[];
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
│           └── App.tsx         # Usage examples
├── llms.txt                    # LLM context file
└── README.md
```
