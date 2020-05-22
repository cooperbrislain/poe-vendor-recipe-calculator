import * as ACTIONS from './../actions/types';

const INITIAL_STATE = {
    items: [],
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTIONS.INV_LIST:
            return {...state, inv: action.payload };
        default:
            return state;
    }
}


