import * as ACTIONS from './../actions/types';

const INITIAL_STATE = {
    chars: [],
    char: {},
    skillTree: {},
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    // console.log(`ACTIONS.${action.type}`, action.payload);
    switch(action.type) {
        case ACTIONS.CHAR_LIST:
            return { ...state, chars: action.payload };
        case ACTIONS.CHAR_INV:
            return { ...state, ...action.payload };
        case ACTIONS.CHAR_SKILL_TREE:
            return { ...state, skillTree: action.payload }
        case ACTIONS.CHAR_DETAIL:
            const skillTree = action.payload.skills.skillTreeData
            delete action.payload.skills.skillTreeData;
            return { ...state, char: action.payload, skillTree };
        case ACTIONS.CHAR_ERROR:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};
