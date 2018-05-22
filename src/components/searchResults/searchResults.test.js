import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { SearchResults } from './searchResults';
import SearchResultsItem from '../searchResultsItem/searchResultsItem';

describe('SearchResults component tests', () => {
    it('renders without crashing', () => {
        const results = [];
        const parameters = {
            city: 'Washington D.C.',
            cityLink: 'washingtondc',
            near: 'Lincoln Memorial'
        };
        const index = null;
        const dispatchMock = jest.fn();
        shallow(<SearchResults
            results={results}
            parameters={parameters}
            selectedSearchResultIndex={index}
            dispatchOpenDetailsModal={dispatchMock}
        />);
    });

    it('renders as many SearchResultsItems as results', () => {
        const results = [{
            "title":"55 E Monroe St. - Garage",
            "price":1600,
            "description":"Enter this location at 55 E Monroe St. This is the Park Monroe garage, operated by SP+. It is located on the south/right-hand side of E Monroe St. (a one-way street) between S Wabash Ave. and S Michigan Ave. You may also enter this location at its other entrance, 50 E Adams, between S Michigan Ave and S Wabash Ave.",
            "distance":"390 ft",
            "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_2571,y_1502/v1412374303/iy9iobjbtmrix01hp2yw.jpg"
         },
         {
            "title":"124 S Wabash Ave. - Garage",
            "price":1500,
            "description":"Enter this location at 124 S Wabash Ave. This is the Palmer House garage operated by ABM Parking. It is located on the west/right-hand side of S Wabash Ave St (a one-way street) between E Monroe St and E Adams St. It is just past the Corner Bakery and just before the main entrance of the Palmer House. Please note: The address 124 S. Wabash is for GPS purposes, this address will not be displayed above the garage entrance, look for a black and gold sign stating \"Parking\" in white print.",
            "distance":"0.1 mi",
            "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_2304,y_1536/v1412377222/msvt2qdusildhvgopsl3.jpg"
         },
         {
            "title":"210 S Wabash Ave. - Adams & Wabash Garage",
            "price":1400,
            "description":"Enter this location at 210 S Wabash Ave.  This is the Adams and Wabash garage operated by InterPark. It is located on the west/right-hand side of S Wabash Ave. (a one-way street) between E Adams St. and E Jackson Blvd. You may also enter this location at its other entrance, 17 E Adams St.",
            "distance":"0.2 mi",
            "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_374,y_247/v1425512904/bhwlpxwcmvkigrn1xmbm.png"
         },];
        const parameters = {
            city: 'Washington D.C.',
            cityLink: 'washingtondc',
            near: 'Lincoln Memorial'
        };
        const index = null;
        const dispatchMock = jest.fn();
        const wrapper = shallow(<SearchResults
            results={results}
            parameters={parameters}
            selectedSearchResultIndex={index}
            dispatchOpenDetailsModal={dispatchMock}
        />);

        expect(wrapper.find(SearchResultsItem).length).toEqual(results.length);
    });
});