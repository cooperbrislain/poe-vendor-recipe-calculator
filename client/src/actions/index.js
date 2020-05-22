import * as types from './types';
import axios from 'axios';

export const signIn = (formProps, callback) => async dispatch => {
    const { token, accountName } = formProps;
    try {
        localStorage.setItem('token', token);
        localStorage.setItem('accountName', accountName);
        dispatch({ type: types.AUTH_USER, payload: { token, accountName }});
        // callback();
    } catch (e) {
        dispatch({ type: types.AUTH_ERROR, payload: 'Failure' })
    }
};

export const getChars = (formProps, callback) => async dispatch => {
    const headers = { token: localStorage.getItem('token') };
    const params = { accountName: localStorage.getItem('accountName') };
    console.log('ACTIONS.GETCHARS', formProps);
    try {
        const response = await axios.get('http://localhost:3001/api/user/chars', { headers, params });
        dispatch({ type: types.USER_CHARS, payload: response.data });
        // callback();
    } catch(e) {
        dispatch({ type: types.USER_ERROR, payload: e });
    }
};

export const getStashTabs = (formProps, callback) => async dispatch => {
    const headers = { token: localStorage.getItem('token') };
    const params = { accountName: localStorage.getItem('accountName'), tabs: 1 };
    try {
        const response = await axios.get('http://localhost:3001/api/user/stash', { headers, params });
        dispatch({ type: types.STASH_TABS, payload: ({ tabs: response.data.tabs }) });
    } catch (e) {
        dispatch({ type: types.USER_ERROR, payload: e });
    }
};

export const getStashTab = (formProps, callback) => async dispatch => {
    const headers = { token: localStorage.getItem('token') };
    const tabIndex = formProps.tabIndex !== undefined? formProps.tabIndex: 0;
    console.log('ACTIONS.GETSTASHTAB', formProps);
    const params = { accountName: localStorage.getItem('accountName'), tabIndex };
    try {
        const response = await axios.get('http://localhost:3001/api/stash/tab', { headers, params });
        dispatch({type: types.STASH_TAB, payload: ({ items: response.data.items, tabIndex })});
    } catch (e) {
        dispatch({ type: types.STASH_ERROR, payload: e });
    }
};

export const getStashInv = (formProps, callback) => async dispatch => {
    const headers = { token: localStorage.getItem('token') };
    const params = { accountName: localStorage.getItem('accountName') };
    console.log('ACTIONS.GETSTASHINV', formProps);
    try {
        const response = await axios.get('http://localhost:3001/api/stash/inv', { headers, params });
        dispatch({ type: types.STASH_INV, payload: response.data });
    } catch (e) {
        dispatch({ type: types.STASH_ERROR, payload: e });
    }
};
