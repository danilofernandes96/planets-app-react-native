import {Reducer} from 'redux';
import {IPlanetId} from '../Types';

export const INITIAL_STATE: IPlanetId = {id: '0', name: ''};

const GlobalIPlanet: Reducer<IPlanetId | any> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'IDPLANET':
      const {id, name} = action.payload;
      return {
        ...state,
        id,
        name,
      };

    default:
      return state;
  }
};

export default GlobalIPlanet;
