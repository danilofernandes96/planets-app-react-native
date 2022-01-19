import {Reducer} from 'redux';
import {IPlanetId} from '../Types';

export const INITIAL_STATE: IPlanetId = {id: '0'};

const GlobalIPlanet: Reducer<IPlanetId | any> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'IDPLANET':
      const {id} = action.payload;
      return {
        ...state,
        id,
      };

    default:
      return state;
  }
};

export default GlobalIPlanet;
