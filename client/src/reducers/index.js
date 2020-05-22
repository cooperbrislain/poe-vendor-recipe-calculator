import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import user from './user';
import stash from './stash';
import chars from './chars';
import inv from './inv';

export default combineReducers({
    auth,
    user,
    stash,
    chars,
    inv,
    form: formReducer
});
