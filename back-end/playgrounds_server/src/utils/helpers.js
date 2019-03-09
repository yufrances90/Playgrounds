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

module.exports = {
    computeDistBtw2Coords,
    computeUnixTimestamp,
    computeDateFromUnixTimestamp
}