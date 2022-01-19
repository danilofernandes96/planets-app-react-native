import {createStore, combineReducers} from 'redux';
import GlobalIPlanet from './modules/PlanetStore/Reducers';
import {IPlanetId} from './modules/PlanetStore/Types';

export interface IRootStore {
  GlobalIPlanet: IPlanetId;
}

const combineStore = combineReducers({
  GlobalIPlanet,
});

const store = createStore(combineStore);

export default store;
