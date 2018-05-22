import * as request from 'request-promise';

export const makeSearchResultsRequest = () => {
    return request({
        json: true,
        method: 'GET',
        uri: 'http://localhost:3000/mocks/searchData.json',
    })
};