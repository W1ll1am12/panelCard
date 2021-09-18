const supportsFeature = (stateObj, feature: number): boolean =>
  (stateObj.attributes.supported_features & feature) !== 0;

export function isTiltOnly(stateObj): boolean {
  const supportsCover =
    supportsFeature(stateObj, 1) || supportsFeature(stateObj, 2) || supportsFeature(stateObj, 8) ? true : false;
  const supportsTilt =
    supportsFeature(stateObj, 16) || supportsFeature(stateObj, 32) || supportsFeature(stateObj, 64) ? true : false;

  return !supportsCover && supportsTilt;
}
