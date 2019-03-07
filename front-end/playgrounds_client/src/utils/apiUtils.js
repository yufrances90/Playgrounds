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