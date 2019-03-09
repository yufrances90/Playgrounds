import constants from './constants';

export const formatAddress = (obj) => {

    const {
        streetNumber,
        street,
        city,
        stateS,
        country
    } = obj;

    return `${streetNumber} ${street}, ${city}, ${stateS}, ${country}`;
}

export const handleResponse = (response) => {

    if(response.status === 200) {
        return response.data;
    } else {

        console.log(response);
        
        return null;
    }
}

export const computeUNIXTimestamp = (date) => {
    return parseInt((date.getTime() / 1000).toFixed(0));
}

export const processWeatherData = (response) => {

    const { weatherData, dates } = response;

    const headerData = dates;

    const mainData = [];

    const weatherAttributes = Object.keys(constants.SUB_HEADER);

    weatherAttributes.forEach(attribute => {

        let tmpArr = [];

        tmpArr.push(constants.SUB_HEADER[attribute]);

        dates.forEach(date => {
            tmpArr.push(weatherData[date].data[0].main[attribute]);
        });

        mainData.push(tmpArr);
    });

    return {
        headerData,
        mainData
    }
}