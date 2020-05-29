import * as ACTIONS from './../actions/types';

const INITIAL_STATE = {
    activeUser: {},
    errorMessage: ''
};

export default function(state = INITIAL_STATE, action)  {
    switch(action.type) {
        case ACTIONS.USER_INFO:
            return {...state, activeUser: action.payload };
        case ACTIONS.USER_ERROR:
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }
}


