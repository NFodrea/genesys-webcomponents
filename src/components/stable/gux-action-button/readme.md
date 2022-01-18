# gux-action-button
An action button. In order to use this element toggle children must be slotted in.

Example usage
```html
<gux-action-button text="Button Text">
  <gux-action-item value="test" text="test"/>
  <gux-action-item value="test2" text="test2"/>
  <gux-action-item value="test3" text="test3"/>
</gux-action-button>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                  | Type                                     | Default       |
| ---------- | ---------- | -------------------------------------------- | ---------------------------------------- | ------------- |
| `accent`   | `accent`   | The component accent (secondary or primary). | `"primary" \| "secondary" \| "tertiary"` | `'secondary'` |
| `disabled` | `disabled` | Disables the action button.                  | `boolean`                                | `false`       |
| `isOpen`   | `is-open`  | It is used to open or not the list.          | `boolean`                                | `false`       |
| `text`     | `text`     | The component text.                          | `string`                                 | `undefined`   |
| `type`     | `type`     | The component button type                    | `"button" \| "reset" \| "submit"`        | `'button'`    |


## Events

| Event            | Description                                 | Type               |
| ---------------- | ------------------------------------------- | ------------------ |
| `guxactionclick` | Triggered when the action button is clicked | `CustomEvent<any>` |
| `guxclose`       | Triggered when the menu is close            | `CustomEvent<any>` |
| `guxopen`        | Triggered when the menu is open             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [gux-popup-beta](../../beta/gux-popup)
- [gux-button-slot-beta](../../beta/gux-button-slot)
- [gux-icon](../gux-icon)
- [gux-list](../gux-list)

### Graph
```mermaid
graph TD;
  gux-action-button --> gux-popup-beta
  gux-action-button --> gux-button-slot-beta
  gux-action-button --> gux-icon
  gux-action-button --> gux-list
  style gux-action-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
