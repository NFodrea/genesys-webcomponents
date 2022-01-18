# gux-visualization-beta



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Default     |
| ------------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `embedOptions`      | --        |             | `EmbedOptions<string, Renderers>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `undefined` |
| `visualizationSpec` | --        |             | `GenericConcatSpec<NonNormalizedSpec> & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string; config?: Config<ExprRef \| SignalRef>; datasets?: Datasets; usermeta?: Dict<unknown>; } \| GenericFacetSpec<UnitSpecWithFrame<Field>, LayerSpec<Field>, Field> & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string; config?: Config<ExprRef \| SignalRef>; datasets?: Datasets; usermeta?: Dict<unknown>; } & DataMixins \| GenericHConcatSpec<NonNormalizedSpec> & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string; config?: Config<ExprRef \| SignalRef>; datasets?: Datasets; usermeta?: Dict<unknown>; } \| GenericUnitSpec<FacetedCompositeEncoding<Field>, AnyMark> & ResolveMixins & GenericCompositionLayout & FrameMixins<ExprRef \| SignalRef> & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string; config?: Config<ExprRef \| SignalRef>; datasets?: Datasets; usermeta?: Dict<unknown>; } & DataMixins \| GenericVConcatSpec<NonNormalizedSpec> & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string; config?: Config<ExprRef \| SignalRef>; datasets?: Datasets; usermeta?: Dict<unknown>; } \| LayerRepeatSpec & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string; config?: Config<ExprRef \| SignalRef>; datasets?: Datasets; usermeta?: Dict<unknown>; } \| LayerSpec<Field> & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string; config?: Config<ExprRef \| SignalRef>; datasets?: Datasets; usermeta?: Dict<unknown>; } \| NonLayerRepeatSpec & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string; config?: Config<ExprRef \| SignalRef>; datasets?: Datasets; usermeta?: Dict<unknown>; } \| Spec` | `undefined` |


## Events

| Event                    | Description | Type               |
| ------------------------ | ----------- | ------------------ |
| `guxchartclicked`        |             | `CustomEvent<any>` |
| `guxchartcomponentready` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [gux-chart-column-beta](../gux-chart-column)
 - [gux-chart-line-beta](../gux-chart-line)

### Graph
```mermaid
graph TD;
  gux-chart-column-beta --> gux-visualization-beta
  gux-chart-line-beta --> gux-visualization-beta
  style gux-visualization-beta fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
