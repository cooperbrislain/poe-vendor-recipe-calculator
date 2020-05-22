import * as ACTIONS from './../actions/types';

const INITIAL_STATE = {
    chars: [],
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTIONS.CHAR_LIST:
            return {...state, ...action.payload };
        case ACTIONS.CHAR_ERROR:
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }
};
