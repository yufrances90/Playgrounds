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