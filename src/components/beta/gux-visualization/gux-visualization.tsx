import {
  Component,
  Element,
  h,
  JSX,
  Prop,
  Event,
  EventEmitter
} from '@stencil/core';
import embed, { EmbedOptions, VisualizationSpec } from 'vega-embed';

import { getDesiredLocale } from '../../../i18n';
import { trackComponent } from '../../../usage-tracking';

import { timeFormatLocale } from './gux-visualization.locale';

@Component({
  styleUrl: 'gux-visualization.less',
  tag: 'gux-visualization-beta',
  shadow: true
})
export class GuxVisualization {
  private chartContainer: HTMLDivElement;
  private defaultVisualizationSpec: VisualizationSpec = {};

  private defaultEmbedOptions: EmbedOptions = {
    actions: false,
    renderer: 'svg'
  };

  @Event()
  chartComponentReady: EventEmitter;

  @Event()
  chartClicked: EventEmitter;

  @Element()
  root: HTMLElement;

  @Prop()
  visualizationSpec: VisualizationSpec;

  @Prop()
  embedOptions: EmbedOptions;

  async componentWillLoad(): Promise<void> {
    trackComponent(this.root);
  }

  handleChartClick(_name: string, value) {
    this.chartClicked.emit(value);
  }

  async componentDidRender(): Promise<void> {
    const locale = getDesiredLocale(this.root);

    const patchOption = {
      patch: visSpec => {
        if (!visSpec?.signals) {
          visSpec.signals = [];
        }
        visSpec.signals.push({
          name: 'chartClick',
          value: 0,
          on: [{ events: 'rect:mousedown', update: 'datum' }]
        });
        return visSpec;
      }
    };
    await embed(
      this.chartContainer,
      Object.assign({}, this.defaultVisualizationSpec, this.visualizationSpec),
      Object.assign(
        {
          timeFormatLocale: timeFormatLocale[locale]
        },
        this.defaultEmbedOptions,
        this.embedOptions,
        patchOption
      )
    ).then(result => {
      result.view.addSignalListener(
        'chartClick',
        this.handleChartClick.bind(this)
      );
    });
  }

  componentDidLoad() {
    this.chartComponentReady.emit();
  }

  render(): JSX.Element {
    return <div ref={el => (this.chartContainer = el)}></div>;
  }
}
