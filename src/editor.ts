import { LitElement, html, TemplateResult, css } from 'lit';
import { property, state, customElement } from 'lit/decorators';
import { HomeAssistant, LovelaceCardEditor, EntityConfig } from 'custom-card-helpers';
import { fireEvent } from 'custom-card-helpers/src/fire-event';

import './components/zone_Selector';
import './components/editor_Properties';
import { PanelCardConfig, zoneConfig, apperanceProperties } from './types';
import { mapEntities, findEntities } from './components/find_entities';
import { mdiPlusThick, mdiChevronDown } from '@mdi/js';
@customElement('panel-card-editor')
export class PanelEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: PanelCardConfig;
  @state() private _configEntities?: EntityConfig[];
  @state() private _zoneName?: string;
  @state() private _toggle?: boolean;
  @state() private _zoneCount?: number;
  @state() private _shown?: boolean;
  @state() private _apperanceProperties?: apperanceProperties;
  private _initialized = false;

  public setConfig(config: PanelCardConfig): void {
    this._config = config;
    this._configEntities = config.zones[0].entities;
    this._zoneName = config.zones[0].name;
    this._shown = true;
    this._apperanceProperties = config.props;
    if (!this._zoneCount) {
      if (this._config.zones.length > 0) {
        this._zoneCount = this._config.zones.length;
      } else {
        this._zoneCount = 0;
      }
    }
  }

  protected shouldUpdate(): boolean {
    if (!this._initialized) {
    }
    return true;
  }

  protected render(): TemplateResult | void {
    if (!this.hass) {
      return html``;
    }
    return html`
      <div class="card-config">
        <div class="zones">
          <div class="zone">
            <div class="zoneName">
              <h2>Properties</h2>
              <mwc-icon-button
                aria-label=${this.hass!.localize('ui.components.entity.entity-picker.clear')}
                class="expand"
                @click=${this._toggleVis}
              >
                <ha-svg-icon .path=${mdiChevronDown}></ha-svg-icon>
              </mwc-icon-button>
            </div>
            ${this._shown == true
              ? html`
                  <editor-properties
                    .apperanceProperties=${this._apperanceProperties}
                    @properties-changed=${this._updateProps}
                  ></editor-properties>
                `
              : html``}
          </div>
          ${this._config!.zones.map((zone, index) => {
            return html`
              <zone-entity-selector
                .hass=${this.hass}
                .zoneIndex=${index}
                .zone=${zone}
                @entities-changed=${this._valueChanged}
              >
              </zone-entity-selector>
            `;
          })}
        </div>
        <div class="zoneBtns">
          <mwc-icon-button
            aria-label=${this.hass!.localize('ui.components.entity.entity-picker.clear')}
            class="remove-icon"
            @click=${this._addZone}
          >
            <ha-svg-icon .path=${mdiPlusThick}></ha-svg-icon>
          </mwc-icon-button>
        </div>
      </div>
    `;
  }

  private _addZone(): void {
    this._zoneCount = this._zoneCount! + 1;
    const maxEntities = 3;
    const entities = Object.keys(this.hass!.states);
    const foundEntities = findEntities(this.hass!, maxEntities, entities, [], ['light', 'switch', 'fan']);
    const str1 = 'Zone ';
    const zoneName = str1.concat(this._zoneCount!.toString());
    const zoneEntities = mapEntities(foundEntities);
    const zone: zoneConfig[] = [{ name: zoneName, entities: zoneEntities }];
    const currentZones: zoneConfig[] = this._config!.zones;
    const newZones = [...currentZones, ...zone];
    this._config = { ...this._config!, zones: newZones };
    fireEvent(this, 'config-changed', { config: this._config });
  }

  private _valueChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config || !this.hass) {
      return;
    }
    if (ev.detail.zone) {
      const zone: zoneConfig = ev.detail.zone;
      const zoneIndex = ev.detail.zoneIndex;
      const currentZones = this._config.zones;
      const newZones = [...currentZones];
      if (!ev.detail.remove) {
        newZones.splice(zoneIndex, 1, zone);
      } else if (ev.detail.remove) {
        newZones.splice(zoneIndex, 1);
      }
      this._config = { ...this._config!, zones: newZones };
      fireEvent(this, 'config-changed', { config: this._config });
    }
  }
  private _toggleVis(): void {
    if (this._shown == true) {
      this._shown = false;
    } else {
      this._shown = true;
    }
  }
  private _updateProps(e: CustomEvent): void {
    const newProps = e.detail._apperanceProperties;
    this._config = { ...this._config!, props: newProps };
    fireEvent(this, 'config-changed', { config: this._config });
  }

  static get styles() {
    return css`
      .zone {
        border: solid #3d3d3d 5px;
        margin-bottom: 10px;
      }
      .zoneName {
        display: flex;
        width: 100%;
      }
      h2 {
        display: inline;
        padding-left: 25px;
      }

      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
      paper-input {
        width: 75%;
      }
    `;
  }
}
