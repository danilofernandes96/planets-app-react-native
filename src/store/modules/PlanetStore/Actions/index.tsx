import {IPlanetId} from '../Types';

export const IDPLANET = 'IDPLANET';

export function IdPlanet(idplanet: IPlanetId) {
  return {
    type: IDPLANET,
    payload: idplanet,
  };
}
