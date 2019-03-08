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