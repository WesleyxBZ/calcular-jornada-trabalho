import {Period} from '../../core/Period';

enum Type {
    SUBMIT_NEW_DATA = 'SUBMIT_NEW_DATA'
}

export interface FormTimeAction {
    type: Type,
    payload: Period
}

export const formTimeActions = (formData: Period): FormTimeAction => {
    return {
        type: Type.SUBMIT_NEW_DATA,
        payload: formData
    }
}
