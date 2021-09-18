import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, state, property } from 'lit/decorators';

import { HomeAssistant, EntityConfig } from 'custom-card-helpers';
import { fireEvent } from 'custom-card-helpers/src/fire-event';
import { mdiChevronDown, mdiClose } from '@mdi/js';
import { zoneConfig } from '../types';

let helpers = (window as any).cardHelpers;
const helperPromise = new Promise<void>(async resolve => {
  if (helpers) resolve();
  if ((window as any).loadCardHelpers) {
    helpers = await (window as any).loadCardHelpers();
    (window as any).cardHelpers = helpers;
    const entitiesCard = helpers.createCardElement({ type: 'entities', entities: [] }); // A valid config avoids errors
    entitiesCard.constructor.getConfigElement();
    resolve();
  }
});

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
              <hui-entities-card-row-editor
                .hass="${this.hass}"
                .entities="${this.zone.entities}"
                @entities-changed=${e => this._valueChanged(e, 'ents')}
              >
              </hui-entities-card-row-editor>
              <mwc-button raised label="Delete Zone" @click=${this._removeZone}>
                <ha-svg-icon .path=${mdiClose}></ha-svg-icon>
              </mwc-button>
            `
          : html``}
      </div>
    `;
  }

  private async _valueChanged(ev: CustomEvent, type): Promise<void> {
    const value = type === 'ents' ? ev.detail.entities : this.zone!.entities;
    const newName = type === 'name' ? ev.detail.value : this.zone!.name;
    const newZone: zoneConfig = { name: newName, entities: value };
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
