import { 
    getGoogleApiKey
} from '../utils/apiUtils';

export const SET_GOOGLE_API_KEY = "SET_GOOGLE_API_KEY"

export const setGoogleApiKey = (key) => {
    return {
        type: SET_GOOGLE_API_KEY,
        key
    }
}

export const handleSetGoogleApiKey = () => {
    return (dispatch) => {
        return getGoogleApiKey()
        .then(response => {

            const apiKey = response["google_api_key"];

            dispatch(setGoogleApiKey(apiKey));
        });
    }
}