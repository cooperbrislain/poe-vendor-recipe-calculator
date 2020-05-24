import * as ACTIONS from './types';
import * as CONFIG from '../config';
import axios from 'axios';

export const signIn = (formProps, callback) => async dispatch => {
    const { token, accountName } = formProps;
    try {
        localStorage.setItem('token', token);
        localStorage.setItem('accountName', accountName);
        dispatch({ type: ACTIONS.AUTH_USER, payload: { token, accountName }});
        // callback();
    } catch (e) {
        dispatch({ type: ACTIONS.AUTH_ERROR, payload: 'Failure' })
    }
};

export const getChars = (formProps, callback) => async dispatch => {
    const url = `${CONFIG.API_URL}/user/chars`;
    const headers = { token: localStorage.getItem('token') };
    const params = { accountName: localStorage.getItem('accountName') };
    console.log('ACTIONS.CHAR_LIST', formProps);
    try {
        const response = await axios.get(url, { headers, params });
        dispatch({ type: ACTIONS.USER_CHARS, payload: response.data });
        // callback();
    } catch(e) {
        dispatch({ type: ACTIONS.USER_ERROR, payload: e });
    }
};

export const getCharInv = (formProps, callback) => async dispatch => {
    const url = `${CONFIG.API_URL}/char/${formProps.character}/inv`;
    const headers = { token: localStorage.getItem('token') };
    const params = { accountName: localStorage.getItem('accountName') };
    console.log('ACTIONS.CHAR_INV', formProps);
    try {
        const response = await axios.get(url, { headers, params });
        const { items } = response.data;
        console.log('CHARACTER INVENTORY', items);
        dispatch({type: ACTIONS.CHAR_INV, payload: { items } });
    } catch(e) {
        dispatch({ type: ACTIONS.CHAR_ERROR, payload: e });
    }
};

export const getAllInv = (formProps, callback) => async dispatch => {
    const url = `${CONFIG.API_URL}/inv`;
    const headers = { token: localStorage.getItem('token') };
    const params = { accountName: localStorage.getItem('accountName') };
    console.log('ACTIONS.INV_LIST', params);
    try {
        const response = await axios.get(url, { headers, params });
        const { items, categories } = response.data;
        console.log('ALL INVENTORY', items);
        dispatch({ type: ACTIONS.INV_LIST, payload: { items, categories } });
    } catch (e) {
        dispatch({ type: ACTIONS.CHAR_ERROR, payload: e });
    }
};

export const getStashTabs = (formProps, callback) => async dispatch => {
    const url = `${CONFIG.API_URL}/user/stash`;
    const headers = { token: localStorage.getItem('token') };
    const params = { accountName: localStorage.getItem('accountName'), tabs: 1 };
    try {
        const response = await axios.get(url, { headers, params });
        dispatch({ type: ACTIONS.STASH_TABS, payload: ({ tabs: response.data.tabs }) });
    } catch (e) {
        dispatch({ type: ACTIONS.USER_ERROR, payload: e });
    }
};

export const getStashTab = (formProps, callback) => async dispatch => {
    const url = `${CONFIG.API_URL}/stash/tab`;
    const headers = { token: localStorage.getItem('token') };
    const tabIndex = formProps.tabIndex !== undefined? formProps.tabIndex: 0;
    console.log('ACTIONS.GETSTASHTAB', formProps);
    const params = { accountName: localStorage.getItem('accountName'), tabIndex };
    try {
        const response = await axios.get(url, { headers, params });
        dispatch({ type: ACTIONS.STASH_TAB, payload: ({ items: response.data.items, tabIndex }) });
    } catch (e) {
        dispatch({ type: ACTIONS.STASH_ERROR, payload: e });
    }
};

export const getStashInv = (formProps, callback) => async dispatch => {
    const url = `${CONFIG.API_URL}/stash/inv`;
    const headers = { token: localStorage.getItem('token') };
    const params = { accountName: localStorage.getItem('accountName') };
    console.log('ACTIONS.GETSTASHINV', formProps);
    try {
        const response = await axios.get(url, { headers, params });
        dispatch({ type: ACTIONS.STASH_INV, payload: response.data });
    } catch (e) {
        dispatch({ type: ACTIONS.STASH_ERROR, payload: e });
    }
};

export const updateSearch = (formProps, callback) => async dispatch => {
    console.log('ACTIONS.UPDATESEARCH', formProps);
    let { category, sort, filters, level_min=0, level_max=100, string } = formProps;
    if (category !== 'all') filters = ['cat'];
    if (string) {
        filters = [...filters, 'string'];
    }
    if (level_min || level_max) filters = [...filters, 'level'];
    const params = { category, sort, filters, level_min, level_max };
    dispatch({ type: ACTIONS.INV_SEARCH_UPDATE, payload: params });
};
