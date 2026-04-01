---
title: Guide
order: 0
---

# Guide

Welcome to the ReactSelection guide. This section covers everything you need to know about using the headless selection component.

## Topics

- [Getting Started](./getting-started) - Installation, prerequisites, and your first selection
- [Configuration](./configuration) - All props, types, and slot configuration
- [Architecture](./architecture) - Design decisions, internals, and how it works

## Key Concepts

### Headless Component

ReactSelection is a **headless** component — it renders no DOM wrapper, no CSS, and no className. You provide all styling through the slot system, giving you complete control over presentation.

### Slot System

The slot system allows you to customize how each item is rendered. A slot can be:

1. **Component** — `<ReactSelection slots={{ item: MyComponent }} />`
2. **Render function** — `slots={{ item: ({ item }) => <div>{item.label}</div> }}`
3. **Component with props** — `slots={{ item: { component: MyComp, props: { className: 'item' } } }}`

### Type Safety

ReactSelection uses TypeScript generics `<T>` — data items can have any shape. Use `valueExtractor` (string or function) to tell the component which field to use for selection identity. All slot props are fully typed.

## Quick Links

- [GitHub Repository](https://github.com/aric-tpls/react-selection-docs)
- [npm Package](https://www.npmjs.com/package/@jswork/react-selection)
