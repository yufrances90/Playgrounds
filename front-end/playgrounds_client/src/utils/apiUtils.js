import * as axios from 'axios';

import {
    handleResponse
} from './helpers';

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

export const createNewPlayground = async (address, name) => {

    const url = `${baseUrl}/create`;

    const response = await axios.post(url, {
        address,
        name
    });

    handleResponse(response);
}

export const getAllPlaygrounds = async () => {

    const url = `${baseUrl}/getAll`;

    const response = await axios.get(url);

    handleResponse(response);
}

export const getPlaygroundById = async (id) => {

    const url = `${baseUrl}/getById?id=${id}`;

    const response = await axios.get(url);

    handleResponse(response);
}

export const updatePlaygroundById = async (reqObj) => {

    const url = `${baseUrl}/updateById`;

    const response = await axios.put(url, reqObj);

    handleResponse(response);
}