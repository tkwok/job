import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types';

// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_tokeb');

export const facebookLogin = () => async dispatch => {
    // must use redux-thunk for async nature to work with action creator, instand action returns
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
        // disptch action fb_login done
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
        // startup FB login process
        doFacebookLogin(dispatch);
    }
};

// don't have to do function within function, single level only
const doFacebookLogin = async dispatch => {
    let { type, token } = await Facebook.logInWithReadPermissionAsyc('472593486635310', {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        // something went wrong here with login
        return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
