/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, state, property } from 'lit/decorators';

import { fireEvent } from 'custom-card-helpers';
import { apperanceProperties, propType } from '../types';
declare global {
  interface HASSDomEvents {
    'properties-changed': {
      _apperanceProperties: apperanceProperties;
    };
  }
}

@customElement('editor-properties')
export class EditorProperties extends LitElement {
  @state() private shown = true;

  @property({ attribute: false }) private apperanceProperties?: apperanceProperties;

  protected render(): TemplateResult {
    if (!this.apperanceProperties) {
      return html``;
    }
    return html`
      <div class="zone1">
        <div class="entities1">
          ${this.apperanceProperties!.propArray.map(prop => {
            if (prop.type) {
              return html`
                ${this._addIncInput(prop.name, prop.type)}
              `;
            } else {
              return html`
                <paper-input
                  class="no-underline"
                  label="Slider Background Color"
                  type="color"
                  value=${this.apperanceProperties!.propArray[4].attr}
                  @value-changed=${(e: CustomEvent<any>) => this._valueChanged(e, 'Slider Background Color')}
                >
                </paper-input>
              `;
            }
          })}
        </div>
      </div>
    `;
  }

  private _valueChanged(ev: CustomEvent, label: string): void {
    if (this.apperanceProperties) {
      let val: number | string;
      const currentProp = this.apperanceProperties.propArray;
      const newPropArray = [...currentProp];
      const propIndex = newPropArray.findIndex(({ name }) => name == label);
      const newProp: propType = { ...newPropArray[propIndex] };
      if (newProp.type == 'number') {
        val = +ev.detail.value;
      } else {
        val = ev.detail.value;
      }
      newProp.attr = val;
      newPropArray.splice(propIndex, 1, newProp);
      this.apperanceProperties = { ...this.apperanceProperties, propArray: newPropArray };
      fireEvent(this, 'properties-changed', { _apperanceProperties: this.apperanceProperties });
    }
  }

  private _addIncInput(label: string, type: string): any {
    return html`
      <paper-input
        label=${label}
        type=${type}
        value=${this.apperanceProperties!.propArray.find(({ name }) => name === label)!.attr}
        @value-changed=${(e: CustomEvent<any>) => this._valueChanged(e, label)}
      >
        <div slot="suffix">${type == 'number' ? 'px' : ''}</div>
      </paper-input>
    `;
  }

  static get styles() {
    return [
      css`
        .zone1 {
          margin-bottom: 10px;
        }
        .entities1 {
          display: flex;
          padding-left: 5px;
          justify-content: center;
          flex-wrap: wrap;
        }
        paper-input {
          width: 45%;
          margin-right: 10px;
        }
        paper-input.no-underline {
          /* hide underline in all states */
          --paper-input-container-underline: {
            display: none;
          }
          --paper-input-container-underline-focus: {
            display: none;
          }
          --paper-input-container-underline-disabled: {
            display: none;
          }
        }
      `,
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'editor-properties': EditorProperties;
  }
}
