import {Period} from '../../core/Period';

/*
 * Arquivo com estrutura Ducks
 */

// Action types

export const Types = {
    SUBMIT_NEW_DATA: 'SUBMIT_NEW_DATA'
}

// Reducer

const initialPeriod: Period = {} as Period

export const FormTimeReducer = (state = initialPeriod, action: FormTimeAction): Period => {
    switch (action.type) {
        case Types.SUBMIT_NEW_DATA:
            return action.payload;
        default:
            return state;
    }
}

// Actions Creators

export interface FormTimeAction {
    type: any,
    payload: Period
}

export const formTimeActions = (formData: Period): FormTimeAction => {
    return {
        type: Types.SUBMIT_NEW_DATA,
        payload: formData
    }
}




