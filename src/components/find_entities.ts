/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HassEntity } from 'home-assistant-js-websocket';
import { HomeAssistant, computeDomain, EntityConfig } from 'custom-card-helpers';

const arrayFilter = (array: any[], conditions: Array<(value: any) => boolean>, maxSize: number) => {
  if (!maxSize || maxSize > array.length) {
    maxSize = array.length;
  }

  const filteredArray: any[] = [];

  for (let i = 0; i < array.length && filteredArray.length < maxSize; i++) {
    let meetsConditions = true;

    for (const condition of conditions) {
      if (!condition(array[i])) {
        meetsConditions = false;
        break;
      }
    }

    if (meetsConditions) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

export const findEntities = (
  hass: HomeAssistant,
  maxEntities: number,
  entities: string[],
  entitiesFallback: string[],
  includeDomains?: string[],
  entityFilter?: (stateObj: HassEntity) => boolean,
) => {
  const conditions: Array<(value: string) => boolean> = [];

  if (includeDomains?.length) {
    conditions.push(eid => includeDomains!.includes(computeDomain(eid)));
  }

  if (entityFilter) {
    conditions.push(eid => hass.states[eid] && entityFilter(hass.states[eid]));
  }

  const entityIds = arrayFilter(entities, conditions, maxEntities);

  if (entityIds.length < maxEntities && entitiesFallback.length) {
    const fallbackEntityIds = findEntities(
      hass,
      maxEntities - entityIds.length,
      entitiesFallback,
      [],
      includeDomains,
      entityFilter,
    );

    entityIds.push(...fallbackEntityIds);
  }

  return entityIds;
};

export const mapEntities = (entities: string[]) => {
  const mappedEntities: EntityConfig[] = [];

  entities.map(ent => {
    const entityName: EntityConfig = { entity: ent };
    mappedEntities.push(entityName);
  });
  return mappedEntities;
};
