import {combineReducers, createStore} from 'redux';
import {FormTimeReducer} from './FormTime/FormTime.reducer';
import {Period} from '../core/Period';

export interface RootState {
    formTime: Period
}

const rootReducer = combineReducers({
    formTime: FormTimeReducer
});

export const store = createStore(rootReducer);
