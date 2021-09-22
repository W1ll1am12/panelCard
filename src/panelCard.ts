import {
  LitElement,
  html,
  TemplateResult,
  css,
} from 'lit';
import {
  property,
  customElement,
  state,
} from 'lit/decorators'
import {
  HomeAssistant,
  LovelaceCardEditor,
  computeDomain,
  turnOnOffEntity,
  computeStateDisplay,
  EntityConfig,
} from 'custom-card-helpers';
import { isTiltOnly } from './components/cover_helper';
 // This is a community maintained npm module with common helper functions/types
import { fireEvent} from "custom-card-helpers/src/fire-event"
import { findEntities, mapEntities } from "./components/find_entities"
import './editor';
import type { PanelCardConfig, zoneConfig, apperanceProperties} from './types';
import { CARD_VERSION } from './const';
import { HassEntity } from 'home-assistant-js-websocket';

/* eslint no-console: 0 */
console.info(
  `%c  PANEL-CARD \n%c  ${"Version"} ${CARD_VERSION}    `,
  'color: white; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'panel-card',
  name: 'Panel Card',
  description: 'A custom panel to display entities grouped into zones',
});
@customElement('panel-card')
export class PanelCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('panel-card-editor');
  }

  public static getStubConfig(
    hass: HomeAssistant,
    entities: string[],
    entitiesFallback: string[],
    zone: zoneConfig,
    props: apperanceProperties,
  ): PanelCardConfig {
    const maxEntities = 3;
    const foundEntities = findEntities(
      hass,
      maxEntities,
      entities,
      entitiesFallback,
      ["light", "switch", "sensor"]
    );
    zone = { name: "default", entities: mapEntities(foundEntities)}
    props = {
      propArray: [
        { name: "Switch Height", type: "number",  attr: 75  },
        { name: "Switch Width",  type: "number",  attr: 300 },
        { name: "Slider Background Color", type: "color", attr: "#4d4d4d" },
        { name: "Slider Foreground Color", type: "color", attr: "#000000" },
    ]
    }
    return { type: "custom:panel-card",  zones: [zone], props: props };
  }

  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: PanelCardConfig;
  @state() private active!: string;

  public setConfig(config: PanelCardConfig): void {
    if (!config.zones) {
      throw new Error('You need to define atleast one zone');
    }
    this.config = {
      name: 'panelCard',
      ...config,
    };
    this.active = this.config.zones[0].name;
  }

  protected render(): TemplateResult | void {
    if (!this.active) {
      console.log("no active zones")
      this.active = this.config.zones[0].name;
    }
    const activeZoneName = (this.active);
    const activeZone = this.config.zones.find((zone: { name: any }) => zone.name === activeZoneName);
    const apperanceProperties: apperanceProperties = this.config!.props!;

    return html`
      <div class="page">
        <div class="top" style="height: ${this.config.zones.length}">
          <div class="buttons">
            ${this.config.zones.map(
              (zone: { name: string }) => html`<button tabindex='0' class="btn-zone" style="--backColor: ${apperanceProperties.propArray[2].attr}; --forgroundColor: ${apperanceProperties.propArray[3].attr};" @click=${this._clickHandler}>${zone.name}</button>`,
            )}
          </div>
        </div>
        <div class="spacer" style="--backColor: ${apperanceProperties.propArray[2].attr};"></div>
        <div class="bottom">
          <div class="inner-main">
            ${activeZone!.entities!.map( (ent: { entity: string; name: string }) => {
              const stateObj = this.hass.states[ent.entity];
              return stateObj
                ? html`
                <div class="holder" style="--slider-width: ${apperanceProperties.propArray[1].attr + 'px'}; --slider-height: ${apperanceProperties.propArray[0].attr + 'px'};--backColor: ${apperanceProperties.propArray[2].attr}; --forgroundColor: ${apperanceProperties.propArray[3].attr};">
                  <div class="innerHolder" >
                    ${this._getEntityTypeHTML(stateObj, ent, apperanceProperties)}
                  </div>
                </div>
              </div>
            </div>
                `
                : html``;
            })}
          </div>
        </div>
      </div>

    `;
  }

  private _getEntityTypeHTML(stateObj: HassEntity, ent, apperanceProperties: apperanceProperties ): any {
    const entType: String = computeDomain(stateObj.entity_id);
    switch (entType) {
      case "light":
        return html`
        <div class="range-holder" >
            <div class="range-info">
              <h2 @click=${(_e) => this._handleMoreInfo(stateObj)}>${ent.name || stateObj.attributes.friendly_name}</h2>
              <h4 class="brightness">
              ${stateObj.state === 'off' ? '0' : Math.round(stateObj.attributes.brightness / 2.55)}
              </h4>
            </div>
            <input
              type="range"
              class="${stateObj.state}"
              .value="${stateObj.state === 'off'
            ? '0'
            : Math.round(stateObj.attributes.brightness / 2.55).toString()}"
              @change=${(e: { target: { value: any } }) => this._setBrightness(stateObj, e.target.value)}
            />
        </div>
       `
      case "switch":
      case "fan":
      case "group":
      case "lock":
        let switchValue = 0;
        switch (stateObj.state) {
          case 'on':
          case 'unlocked':
            switchValue = 1;
            break;
          case 'off':
          case 'locked':
            switchValue = 0;
            break;
          default:
            switchValue = 0;
        }
        return html`
          <div class="switch-holder">
            <div class="switch-label">
              <h2 @click=${(_e) => this._handleMoreInfo(stateObj)}>${ent.name || stateObj.attributes.friendly_name}</h2>
            </div>
            <div class="${ entType === "lock" ? "switch-toggle lock" : "switch-toggle"}">
              <input type="checkbox" id="${ent.name || stateObj.attributes.friendly_name}" ?checked="${switchValue === 1 ? true : false}"  @click= ${(e) => this._switch(e, stateObj) }>
              <label for="${ent.name || stateObj.attributes.friendly_name}"></label>
            </div>
          </div>
        `
      case "sensor":
      case "binary_sensor":
      case "air_quality":
        return html`
        <div class="info">
          <h2 @click=${(_e) => this._handleMoreInfo(stateObj)}>${stateObj.attributes.friendly_name}</h2>
          <h4>${computeStateDisplay(this.hass.localize, stateObj, this.hass.locale!)}</h4>
        </div>
        `
      case "cover":
        const conf: EntityConfig = { entity: ent.entity, type: 'cover-entity' }
        return html`
        <div class= "cover">
          <div class="info">
            <h2 @click=${(_e) => this._handleMoreInfo(stateObj)}>${stateObj.attributes.friendly_name}</h2>
          </div>
          <div class= "controls" style="color: ${apperanceProperties.propArray[3].attr}; --disabled-text-color: ${apperanceProperties.propArray[2].attr};">
            ${ isTiltOnly(stateObj)
            ? html `
               <ha-cover-tilt-controls
                 .hass=${this.hass}
                 .stateObj=${stateObj}
               ></ha-cover-tilt-controls>`
              : html `
               <ha-cover-controls
                 .hass=${this.hass}
                 .stateObj=${stateObj}
               ></ha-cover-controls>`
            }
          </div>
        </div>
        `
      default:
        return html`<h2>UNKNOWN ENTITY TYPE</h2>`
    }
  }

  private _setBrightness(state, value: number): void {
    this.hass.callService('homeassistant', 'turn_on', {
      entity_id: state.entity_id,
      brightness: value * 2.55,
    });
  }

  private _switch(e, state): void {
    const turnOn = (e.target).checked ? true : false;
    turnOnOffEntity(this.hass, state.entity_id, turnOn);
  }
  private _handleMoreInfo(stateObj): void {
    fireEvent(this, "hass-more-info", {
      entityId: stateObj.entity_id,
    });
  }
  private _clickHandler(event: { target: { innerText: string } }): void {
    this.active = event.target.innerText;
  }

  // https://lit-element.polymer-project.org/guide/styles
  static get styles() {
    return css`
      .page {
        width: 100%;
        max-height: 90vh;
        display: flex;
        background: var(--ha-card-background, var(--card-background-color, white));
        color: var(--primary-text-color);
        flex-direction: column;
        border-radius: var(--ha-card-border-radius, 4px);
      }

      .top {
        max-height: 40%;
        display: block;
        justify-content: center;
        overflow: scroll;
        text-align: center;
      }

      .bottom {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 58%;
        overflow: scroll;
        margin-top: 10px;
      }
      .spacer {
        height: 5px;
        background: var(--backColor);
      }
      .buttons {
        margin-top: 7px;
        margin-bottom: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: auto;
      }
      .buttons button {
        width: 95%;
        height: 50px;
        font-size: 16px;
        font-weight: bold;
        background: #1c1c1c;
        border-width: 2px;
        border-color: black;
        margin-bottom: 7px;
        box-shadow: 2px 2px 2px darkgray;
        border-radius: 5px;
        color: var(--primary-text-color);
      }

      .buttons button:active, .buttons button:focus{
        background: var(--backColor);
      }

      .back-btn {
        border: 2px solid #fff;
        background: transparent;
        font-size: 18px;
        border-radius: 4px;
        width: 100%;
        display: block;
        padding: 10px 0px;
        margin-top: 5px;
      }

      .page > .bottom > .inner-main {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: auto;
      }
      .page > .bottom > .inner-main > .holder {
        width: var(--slider-width);
        height: var(--slider-height);
        position: relative;
        margin: auto;
        margin-bottom: 10px;
      }

      h2 {
        display: block;
        margin-bottom: 0px;
        text-align: center;
        font-size: 16px;
        margin-top: 0px;
        z-index: 10;
        position: relative;
      }
      h4, span {
        display: flex;
        font-weight: 300;
        margin-bottom: 10px;
        text-align: center;
        font-size: 16px;
        margin-top: 0px;
        z-index: 10;
        position: relative;
        justify-content: center;
        align-items: center;
      }
      h4.brightness:after {
        content: '%';
        padding-left: 1px;
      }

      .range-holder {
        height: var(--slider-height);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--slider-width);
        background: var(--backColor);
        border-radius: 10px;
      }
      .range-holder input[type='range'] {
        -webkit-appearance: none;
        -moz-appearance: none;
        overflow: hidden;
        width: 50%;
        height: 50%;
        background: var(--backColor);
        padding-right: 10px;
      }
      .range-holder input[type='range']::-webkit-slider-runnable-track {
        height: 20px;
        -webkit-appearance: none;
        overflow: hidden !important;
        display: flex;
        align-items: center;
        height: 20px;
        border-radius: 10px;
        box-shadow: inset -3px -3px 5px rgba(255,255,255,.2), inset 3px 3px 5px rgba(0, 0, 0, 0.25);
      }
      .range-holder input[type="range"]::-webkit-slider-container{
        overflow: hidden;
      }
      .range-holder input[type='range']::-webkit-slider-thumb {
        height: 20px;
        width: 20px;
        cursor: ew-resize;
        background: white;
        -webkit-appearance: none;
        box-shadow: -340px 0 0 330px var(--forgroundColor), inset 0 0 0 3px var(--forgroundColor);
        border-radius: 50%;
        -webkit-transition: box-shadow 0.2s ease-in-out;
        transition: box-shadow 0.2s ease-in-out;
        position: relative;
      }
      .range-holder input[type=range]:active::-webkit-slider-thumb {
        background: #fff;
        box-shadow: -340px 0 0 330px var(--forgroundColor), inset 0 0 0 3px var(--forgroundColor);
      }
      .range-info{
        width: 50%;
      }

      .switch-holder {
        height: var(--slider-height);
        width: var(--slider-width);
        background-color: var(--backColor);
        position: relative;
        display: flex;
        border-radius: 10px;
        justify-content: space-between;
        align-items: center;
      }
      .switch-label {
        width: 150px;
      }
      .switch-label i {
        margin-right: 5px;
      }

      .switch-toggle {
          height: 40px;
          margin-right: 15px;
      }

      .switch-toggle input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          z-index: -2;
      }

      .switch-toggle input[type="checkbox"] + label {
          position: relative;
          display: inline-block;
          background: var(--forgroundColor);
          width: 100px;
          height: 40px;
          border-radius: 20px;
          margin: 0;
          cursor: pointer;
          box-shadow: inset -8px -8px 15px rgba(255,255,255,.01),
                      inset 10px 10px 10px rgba(0,0,0, 0);

      }
      .switch-toggle.lock input[type="checkbox"] + label::before{
        content: 'LOCKED';
        font-size: 8px;
      }
      .switch-toggle.lock input[type="checkbox"]:checked + label::before {
        content: 'UNLOCKED';
        font-size: 8px;
      }

      .switch-toggle input[type="checkbox"] + label::before {
          position: absolute;
          content: 'OFF';
          font-size: 13px;
          text-align: center;
          line-height: 25px;
          top: 6px;
          left: 8px;
          width: 45px;
          height: 25px;
          border-radius: 20px;
          border: var(--backColor) solid 2px;
          box-shadow: -2px -2px 1px rgba(255,255,255,.2),
                      2px 2px 5px rgba(0,0,0, .25);
          transition: .3s ease-in-out;
      }

      .switch-toggle input[type="checkbox"]:checked + label::before {
          left: 50%;
          content: 'ON';
          box-shadow: -2px -2px 1px rgba(255,255,255,.2),
                      2px 2px 5px rgba(0,0,0, .25);
      }

      .switch-holder h2 {
        width: 140px;
        height: 75px;
        text-align: center;
        margin-left: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .info, .cover{
        width: var(--slider-width);
        height: var(--slider-height);
        text-align: center;
        border-radius: 10px;
        background-color: var(--backColor);
        justify-content: center;
        align-items: center;
        display: flex;
      }
      .info{
        flex-direction: column;
      }

      .climate{
        flex-direction: row;
      }

      .moreInfo{
        width: var(--slider-width);
        padding-top: 15px;
        background: none;
        border: none;
      }

    `;
  }
}
