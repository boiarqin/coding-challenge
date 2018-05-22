import request from 'request-promise';

export const makeSearchResultsRequest = () => {
    return request({
        method: 'GET',
        uri: 'http://localhost:3000/mocks/searchData.json',
        json: true
    })
};