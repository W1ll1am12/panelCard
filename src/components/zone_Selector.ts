/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  css,
  CSSResult,
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
  TemplateResult,
} from 'lit-element';

import { fireEvent, HomeAssistant, EntityConfig } from 'custom-card-helpers';
import { mdiChevronDown, mdiClose } from '@mdi/js';
import { zoneConfig } from '../types';

declare global {
  interface HASSDomEvents {
    'entities-changed': {
      name?: string;
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

  @internalProperty() protected entities?: EntityConfig[];

  @internalProperty() private name?: string;

  @internalProperty() private shown = true;

  @internalProperty() private zoneIndex?: number;

  protected render(): TemplateResult {
    if (!this.zone || !this.hass) {
      return html``;
    }
    return html`
      <div class="zone">
        <div class="zoneName">
          <paper-input
            .label=${'Zone Name'}
            .value=${this.zone?.name}
            @value-changed=${this._titleChanged}
          ></paper-input>
          <mwc-icon-button
            aria-label=${this.hass!.localize('ui.components.entity.entity-picker.clear')}
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
                ${this.zone?.entities!.map((ent, index) => {
                  return html`
                    <div class="entity">
                      <ha-entity-picker
                        allow-custom-entity
                        hideClearIcon
                        .hass=${this.hass}
                        .value=${ent.entity}
                        .zoneName=${this.name}
                        .index=${index}
                        @value-changed=${e => this._valueChanged(e, index)}
                      ></ha-entity-picker>
                      <mwc-icon-button
                        aria-label=${this.hass!.localize('ui.components.entity.entity-picker.clear')}
                        class="remove-icon"
                        .index=${index}
                        @click=${this._removeEntity}
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

  private _valueChanged(ev: CustomEvent, index): void {
    const value = ev.detail.value;
    const entityIndex = index;
    const newConfigEntities = this.zone!.entities!.concat();
    const newName = this.zone!.name;
    if (value === '') {
      newConfigEntities.splice(entityIndex, 1);
    } else {
      newConfigEntities[entityIndex] = {
        entity: value!,
      };
    }
    const newZone: zoneConfig = { name: newName, entities: newConfigEntities };
    fireEvent(this, 'entities-changed', { zone: newZone, zoneIndex: this.zoneIndex });
  }
  private _titleChanged(ev): void {
    const zoneName = ev.detail.value;
    const newConfigEntities = [...this.zone!.entities!];
    const newZone: zoneConfig = { name: zoneName, entities: newConfigEntities };
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
  private async _removeEntity(ev: CustomEvent): Promise<void> {
    const entityIndex: number = (ev.currentTarget as any).index;
    const newConfigEntities = this.zone!.entities!.concat();
    const newConfigName = this.zone!.name!;
    newConfigEntities.splice(entityIndex, 1);
    const newZone: zoneConfig = { name: newConfigName, entities: newConfigEntities };
    fireEvent(this, 'entities-changed', { zone: newZone, zoneIndex: this.zoneIndex });
  }
  private async _removeZone(): Promise<void> {
    fireEvent(this, 'entities-changed', { zone: this.zone, remove: true });
  }
  private _toggle(): void {
    if (this.shown == true) {
      this.shown = false;
    } else {
      this.shown = true;
    }
  }

  static get styles(): CSSResult[] {
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
