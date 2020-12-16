import {Period} from '../../core/Period';
import {FormTimeAction} from './FormTime.actions';

const emptyPeriod: Period = {} as Period

export const FormTimeReducer = (state = emptyPeriod, action: FormTimeAction): Period => {
    switch (action.type) {
        case 'SUBMIT_NEW_DATA':
            return action.payload;
        default:
            return state;
    }
}
