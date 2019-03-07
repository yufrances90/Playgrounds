import * as axios from 'axios';

const baseUrl = "http://localhost:8000";

export const getResponseFromServer = async () => {

    const response = await axios.get(baseUrl);

    console.log(response);
}

export const getCoordinatesByAddress = async (address) => {

    const url = `${baseUrl}/geocodingByAddress?address=${address}`;

    const response = await axios.get(url);

    console.log(response);
}

/** TODO: Rewrite using POST method */
export const createNewPlayground = async (address, name) => {

    const url = `${baseUrl}/create?address=${address}&name=${name}`;

    const response = await axios.get(url);

    console.log(response);
}

export const getAllPlaygrounds = async () => {

    const url = `${baseUrl}/getAll`;

    const response = await axios.get(url);

    if(response.status === 200) {
        return response.data;
    } else {
        return null;
    }
}