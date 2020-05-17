import * as types from './types';
import axios from 'axios';

export const signIn = (formProps, callback) => async dispatch => {
    const { token, accountName } = formProps;
    try {
        dispatch({ type: types.AUTH_USER, payload: { token, accountName }});
        localStorage.setItem('token', token);
        callback();
    } catch (e) {
        dispatch({ type: types.AUTH_ERROR, payload: 'Failure' })
    }
};

export const getChars = () => async dispatch => {
    const headers = { token: localStorage.getItem('token') };
    try {
        const response = await axios.get('/api/user/chars', { headers });
        dispatch({ type: types.USER_CHARS, payload: response.data });
    } catch(e) {
        dispatch({ type: types.USER_ERROR, payload: 'bad' });
    }
};
