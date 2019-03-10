import {
    SET_GOOGLE_API_KEY
} from '../actions/googleApiKey';

const googleApiKey = (state = null, action) => {

    switch(action.type) {
        case SET_GOOGLE_API_KEY:
            return action.key;
        default:
            return state;
    }
}

export default googleApiKey;