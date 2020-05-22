import * as ACTIONS from './../actions/types';

const INITIAL_STATE = {
    tabs: [],
    tab: {},
    inv: [],
    tabIndex: 0,
    err: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTIONS.STASH_TABS:
            return {...state, tabs: action.payload.tabs, numTabs: action.payload.numTabs };
        case ACTIONS.STASH_INV:
            return {...state, inv: action.payload };
        case ACTIONS.STASH_TAB:
            return {...state, inv: action.payload.items, tabIndex: action.payload.tabIndex };
        case ACTIONS.STASH_SEARCH:
            return {...state, filtered: action.payload };
        case ACTIONS.STASH_ERROR:
            return {...state, err: action.payload };
        default:
            return state;
    }
}


