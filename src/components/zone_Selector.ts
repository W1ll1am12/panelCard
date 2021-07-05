import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, state, property } from 'lit/decorators';

import { HomeAssistant, EntityConfig } from 'custom-card-helpers';
import { fireEvent } from 'custom-card-helpers/src/fire-event';
import { mdiChevronDown, mdiClose } from '@mdi/js';
import { zoneConfig } from '../types';

declare global {
  interface HASSDomEvents {
    'entities-changed': {
      zone?: zoneConfig;
      remove?: boolean;
      zoneIndex?: number;
    };
  }
}

@customElement('zone-entity-selector')
export class ZoneEntitySelector extends LitElement {
  @property({ attribute: false }) protected hass?: HomeAssistant;

  @property({ attribute: false }) protected zone?: zoneConfig;

  @state() protected entities?: EntityConfig[];

  @state() private name?: string;

  @state() private shown = true;

  @state() private zoneIndex?: number;

  protected render(): TemplateResult {
    if (!this.zone || !this.hass) {
      return html``;
    }
    return html`
      <div class="zone">
        <div class="zoneName">
          <paper-input
            .label=${'Zone Name'}
            .value=${this.zone.name}
            @value-changed=${e => this._valueChanged(e, 'name')}
          ></paper-input>
          <mwc-icon-button
            aria-label=${this.hass.localize('ui.components.entity.entity-picker.clear')}
            class="expand"
            .value=${this.zone}
            @click=${this._toggle}
          >
            <ha-svg-icon .path=${mdiChevronDown}></ha-svg-icon>
          </mwc-icon-button>
        </div>
        ${this.shown == true
          ? html`
              <div class="entities">
                ${this.zone.entities!.map((ent, index) => {
                  return html`
                    <div class="entity">
                      <ha-entity-picker
                        allow-custom-entity
                        hideClearIcon
                        .hass=${this.hass}
                        .value=${ent.entity}
                        .zoneName=${this.name}
                        .index=${index}
                        @value-changed=${e => this._valueChanged(e, 'update', index)}
                      ></ha-entity-picker>
                      <mwc-icon-button
                        aria-label=${this.hass!.localize('ui.components.entity.entity-picker.clear')}
                        class="remove-icon"
                        .index=${index}
                        @click=${e => this._valueChanged(e, 'remove', index)}
                      >
                        <ha-svg-icon .path=${mdiClose}></ha-svg-icon>
                      </mwc-icon-button>
                    </div>
                  `;
                })}
                <ha-entity-picker
                  class="entityPicker"
                  .label=${'Add Entity'}
                  .hass=${this.hass}
                  @value-changed=${this._addEntity}
                ></ha-entity-picker>
                <mwc-button raised label="Delete Zone" @click=${this._removeZone}>
                  <ha-svg-icon .path=${mdiClose}></ha-svg-icon>
                </mwc-button>
              </div>
            `
          : html``}
      </div>
    `;
  }

  private async _valueChanged(ev: CustomEvent, action, index?): Promise<void> {
    // value = entity
    const value = ev.detail.value;
    const newConfigEntities = this.zone!.entities!.concat();
    let newName = this.zone!.name;
    if (value === '' || action === 'remove') {
      newConfigEntities.splice(index, 1);
    } else if (action === 'update') {
      newConfigEntities[index] = { entity: value! };
    } else {
      newName = value;
    }
    const newZone: zoneConfig = { name: newName, entities: newConfigEntities };
    fireEvent(this, 'entities-changed', { zone: newZone, zoneIndex: this.zoneIndex });
  }

  private async _addEntity(ev: CustomEvent): Promise<void> {
    const value = ev.detail.value;
    const newConfigName = this.zone!.name;
    const newConfigEntities = this.zone?.entities!.concat({
      entity: value as string,
    });
    (ev.target as any).value = '';
    const newZone: zoneConfig = { name: newConfigName, entities: newConfigEntities };
    fireEvent(this, 'entities-changed', { zone: newZone, zoneIndex: this.zoneIndex });
  }
  private async _removeZone(): Promise<void> {
    fireEvent(this, 'entities-changed', { zone: this.zone, remove: true, zoneIndex: this.zoneIndex });
  }
  private _toggle(): void {
    if (this.shown == true) {
      this.shown = false;
    } else {
      this.shown = true;
    }
  }

  static get styles() {
    return [
      css`
        .zone {
          border: solid #3d3d3d 5px;
          margin-bottom: 10px;
        }
        .entity {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .entities {
          display: flex;
          flex-direction: column;
          padding-left: 5px;
        }
        .entity .handle {
          padding-right: 8px;
          cursor: move;
        }
        .entity ha-entity-picker {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          width: 75%;
          height: auto;
        }
        .zoneName {
          padding-left: 5px;
        }
        zone-entity-selector paper-input-container:first-of-type .unfocused-line {
          border-color: orange;
        }
        .zoneName paper-input {
          width: 90%;
        }
        .zoneName {
          display: flex;
          flex-direction: row;
        }
        mwc-button {
          --mdc-theme-primary: #ff0000;
          --mdc-theme-on-primary: white;
          padding-right: 5px;
          padding-bottom: 5px;
        }
        .entityPicker {
          padding-right: 5px;
        }
      `,
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zone-entity-selector': ZoneEntitySelector;
  }
}
