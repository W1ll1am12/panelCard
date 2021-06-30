/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
  CSSResult,
  css,
  internalProperty,
} from 'lit-element';
import { HomeAssistant, fireEvent, LovelaceCardEditor, EntityConfig } from 'custom-card-helpers';
import './components/zone_Selector';
import './components/editor_Properties';
import { PanelCardConfig, zoneConfig, apperanceProperties } from './types';
import { mapEntities, findEntities } from './components/find_entities';
import { mdiPlusThick, mdiChevronDown } from '@mdi/js';
@customElement('panel-card-editor')
export class PanelEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @internalProperty() private _config?: PanelCardConfig;
  @internalProperty() private _configEntities?: EntityConfig[];
  @internalProperty() private _zoneName?: string;
  @internalProperty() private _toggle?: boolean;
  @internalProperty() private _helpers?: any;
  @internalProperty() private _zoneCount?: number;
  @internalProperty() private _shown?: boolean;
  @internalProperty() private _apperanceProperties?: apperanceProperties;
  private _initialized = false;

  public setConfig(config: PanelCardConfig): void {
    this._config = config;
    this._configEntities = config.zones[0].entities;
    this._zoneName = config.zones[0].name;
    this._shown = true;
    this._apperanceProperties = config.props;
    this.loadCardHelpers();
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
      this._initialize();
    }
    return true;
  }

  protected render(): TemplateResult | void {
    if (!this.hass || !this._helpers) {
      return html``;
    }
    // The climate more-info has ha-switch and paper-dropdown-menu elements that are lazy loaded unless explicitly done here
    this._helpers.importMoreInfoControl('climate');

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

  private _initialize(): void {
    if (this.hass === undefined) return;
    if (this._config === undefined) return;
    if (this._helpers === undefined) return;
    this._initialized = true;
  }

  private async loadCardHelpers(): Promise<void> {
    this._helpers = await (window as any).loadCardHelpers();
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
    if (ev.detail.zone && !ev.detail.remove) {
      const zone: zoneConfig = ev.detail.zone;
      const zoneIndex = ev.detail.zoneIndex;
      const currentZones = this._config.zones;
      const newZones = [...currentZones];
      newZones.splice(zoneIndex, 1, zone);
      this._config = { ...this._config!, zones: newZones };
      fireEvent(this, 'config-changed', { config: this._config });
    } else if (ev.detail.remove) {
      const zone: zoneConfig = ev.detail.zone;
      const zoneIndex = this._config.zones.findIndex((_zone: { name: any }) => _zone.name === zone.name);
      const currentZones = this._config.zones;
      const newZones = [...currentZones];
      newZones.splice(zoneIndex, 1);
      this._config = { ...this._config, zones: newZones };
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

  static get styles(): CSSResult {
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
