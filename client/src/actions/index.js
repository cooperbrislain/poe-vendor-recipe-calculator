import * as types from './types';
import axios from 'axios';

export const signIn = (formProps, callback) => async dispatch => {
    const { token, accountName } = formProps;
    try {
        localStorage.setItem('token', token);
        localStorage.setItem('accountName', accountName);
        dispatch({ type: types.AUTH_USER, payload: { token, accountName }});
        callback();
    } catch (e) {
        dispatch({ type: types.AUTH_ERROR, payload: 'Failure' })
    }
};

export const getChars = (formProps, callback) => async dispatch => {
    const headers = { token: localStorage.getItem('token') };
    console.log('ACTIONS.GETCHARS', formProps);
    try {
        const response = await axios.get('/api/user/chars', { headers });
        dispatch({ type: types.USER_CHARS, payload: response.data });
        callback();
    } catch(e) {
        dispatch({ type: types.USER_ERROR, payload: 'bad' });
    }
};
