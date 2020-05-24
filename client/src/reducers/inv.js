import * as ACTIONS from './../actions/types';

// Inv will be a total list of all:
// character inventories
// equipped items
// socketed gems
// all stashes
// other?

const INITIAL_STATE = {
    items: [],
    categories: {},
    errorMessage: '',
    search: {
        sort: 'alpha',
        filters: ['all']
    }
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTIONS.INV_LIST:
            return { ...state, items: action.payload.items, categories: action.payload.categories };
        case ACTIONS.CHAR_INV:
            return { ...state, items: action.payload.items, categories: action.payload.categories };
        case ACTIONS.INV_SEARCH_UPDATE:
            return { ...state, search: { ...state.search, ...action.payload } };
        default:
            return state;
    }
}


