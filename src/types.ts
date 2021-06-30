/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
import {
  ActionConfig,
  LovelaceCard,
  LovelaceCardConfig,
  LovelaceCardEditor,
  LovelaceRowConfig,
} from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'panel-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

export interface zoneConfig {
  name: string;
  entities?: Array<any>;
}

// TODO Add your configuration elements here for type-checking
export interface PanelCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  show_warning?: boolean;
  show_error?: boolean;
  test_gui?: boolean;
  entities?: Array<LovelaceRowConfig | string>;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
  zones: Array<zoneConfig>;
  props: apperanceProperties;
}

export interface EditorTarget extends EventTarget {
  value?: string;
  index?: number;
  checked?: boolean;
  configValue?: string;
  type?: HTMLInputElement['type'];
  config: ActionConfig;
}
export interface apperanceProperties {
  propArray: Array<propType>;
}
export interface propType {
  name: string;
  type?: string;
  attr: number | string;
}
