/*
    Reference: 
        https://www.movable-type.co.uk/scripts/latlong.html
*/

const toRadians = (deg) => {
    return deg * (Math.PI / 180); 
}

const computeDistBtw2Coords = (location1, location2) => {

    const lng1 = location1.lng;
    const lat1 = location1.lat;

    const lng2 = location2.lng;
    const lat2 = location2.lat;

    const R = 6371;

    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
                Math.sin(dLng / 2) * Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

const computeUnixTimestamp = (date) => {
    return Math.floor(date.getTime()/1000.0);
}

const computeDateFromUnixTimestamp = (unixTimestamp) => {
    return new Date(unixTimestamp * 1000);
}

const generateDateArray = () => {

    const dates = [];

    for(let i = 0; i <= 6; i++) {

        const date = new Date();

        date.setDate(date.getDate() - i);

        const formattedDateString = formatDateString(date);

        dates.push(formattedDateString);
    }

    return dates.sort();
}

const formatDateString = (date) =>{
    
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();

    const monthString = (month <= 9)? `0${month}` : `${month}`;
    const dayString = (day <= 9)? `0${day}`:`${day}`;

    return `${year}-${monthString}-${dayString}`;
}

const convertLocalDateToUTCDate = (date, toUTC) => {

    date = new Date(date);

    const localOffset = date.getTimezoneOffset() * 60000;
    const localTime = date.getTime();

    if(toUTC) {
        date = localTime + localOffset;
    } else {
        date = localTime - localOffset;
    }

    return new Date(date);
}

module.exports = {
    computeDistBtw2Coords,
    computeUnixTimestamp,
    computeDateFromUnixTimestamp,
    generateDateArray,
    formatDateString,
    convertLocalDateToUTCDate
}

