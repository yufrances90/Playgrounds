import * as axios from 'axios';

const url = "http://localhost:8000/";

export const getResponseFromServer = async () => {

    const response = await axios.get(url);

    console.log(response);
}