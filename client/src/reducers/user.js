import * as ACTIONS from './../actions/types';

const INITIAL_STATE = {
    activeUser: {},
    chars: [],
    stash: [],
    errorMessage: ''
};

export default function(state = INITIAL_STATE, action)  {
    switch(action.type) {
        case ACTIONS.USER_INFO:
            return {...state, activeUser: action.payload };
        case ACTIONS.USER_CHARS:
            return {...state, chars: action.payload };
        case ACTIONS.USER_STASH:
            return {...state, stash: action.payload.tabs };
        case ACTIONS.USER_ERROR:
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }
}


