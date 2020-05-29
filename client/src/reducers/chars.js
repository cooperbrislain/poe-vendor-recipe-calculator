import * as ACTIONS from './../actions/types';

const INITIAL_STATE = {
    chars: [],
    char: {},
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTIONS.CHAR_LIST:
            console.log('ACTIONS.CHAR_LIST', action.payload);
            return { ...state, chars: action.payload };
        case ACTIONS.CHAR_INV:
            return { ...state, ...action.payload };
        case ACTIONS.CHAR_DETAIL:
            return { ...state, char: action.payload };
        case ACTIONS.CHAR_ERROR:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};
