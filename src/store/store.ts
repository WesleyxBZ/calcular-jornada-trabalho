import {combineReducers, createStore} from 'redux';
import {Period} from '../core/Period';
import {FormTimeReducer} from './ducks/formTime';

export interface RootState {
    formTime: Period
}

const rootReducer = combineReducers({
    formTime: FormTimeReducer
});

export const store = createStore(rootReducer);
