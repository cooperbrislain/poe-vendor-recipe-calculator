import * as ACTIONS from './../actions/types';

// Inv will be a total list of all:
// character inventories
// equipped items
// socketed gems
// all stashes
// other?

const INITIAL_STATE = {
    items: [],
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTIONS.INV_LIST:
            return {...state, items: action.payload.items };
        case ACTIONS.CHAR_INV:
            return {...state, items: action.payload.items };
        default:
            return state;
    }
}


