import { AUTH_USER, AUTH_ERROR } from './../actions/types';

const INITIAL_STATE = {
    accountName: localStorage.getItem('accountName') || '',
    token: localStorage.getItem('token') || '',
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AUTH_USER:
            const { token, accountName } = state.auth;
            localStorage.setItem('token', token);
            localStorage.setItem('accountName', accountName);
            console.log('AUTH_USER DISPATCH STATE', state);
            return {...state, ...action.payload };
        case AUTH_ERROR:
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }
};
