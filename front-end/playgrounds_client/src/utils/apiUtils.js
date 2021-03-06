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

    return handleResponse(response);
}

export const getAllPlaygrounds = async () => {

    const url = `${baseUrl}/getAll`;

    const response = await axios.get(url);

    return handleResponse(response);
}

export const getPlaygroundById = async (id) => {

    const url = `${baseUrl}/getById?id=${id}`;

    const response = await axios.get(url);

    return handleResponse(response);
}

export const updatePlaygroundById = async (obj) => {

    const { id, ...reqObj } = obj;

    const url = `${baseUrl}/updateById?id=${id}`;

    const response = await axios.put(url, reqObj);

    handleResponse(response);
}

export const deletePlaygroundById = async (id) => {

    const url = `${baseUrl}/deleteById?id=${id}`;

    const response = await axios.delete(url);

    handleResponse(response);
}

export const findClosestPlaygroundsByCoord = async (coord) => {

    const url = `${baseUrl}/closestPlaygroundsByCoord`;

    const response = await axios.post(url, { coord });

    return handleResponse(response);
}

export const getPastWeatherInfo = async (reqObj) => {

    const url = `${baseUrl}/pastWeatherInfo`;

    const response = await axios.post(url, reqObj);

    return handleResponse(response);
}

export const getGoogleApiKey = async () => {
     
    const url = `${baseUrl}/googleKey`;

    const response = await axios.get(url);

    return handleResponse(response);
}