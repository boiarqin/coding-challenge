import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultsItem from './searchResultsItem';

describe('SearchResultsItem component tests', () => {
    it('renders without crashing', () => {
        const itemData = {
            "title":"Seven Lions - Valet",
            "price":1400,
            "description":"Arrive at this location at 97 E Adams St. This is the Seven Lions valet stand operated by VPA. It is located in front of Starbucks on the south side of E Adams St. between S Michigan Ave. and S Wabash Ave. If you are using the SpotHero Mobile App, please refer to the 2nd picture for an annotated map.",
            "distance":"0.1 mi",
            "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_1632,y_1224/v1433342744/anwchje8oi6zjldxb04q.jpg"
        };
        const detailsClickHandlerMock = jest.fn();
        const isSelected = true;
        shallow(<SearchResultsItem
            data={itemData}
            isSelected={isSelected}
            detailsClickHandler={detailsClickHandlerMock}
        />);
    });

    it('calls detailsClickHandler when the details button is clicked', () => {
        const itemData = {
            "title":"Seven Lions - Valet",
            "price":1400,
            "description":"Arrive at this location at 97 E Adams St. This is the Seven Lions valet stand operated by VPA. It is located in front of Starbucks on the south side of E Adams St. between S Michigan Ave. and S Wabash Ave. If you are using the SpotHero Mobile App, please refer to the 2nd picture for an annotated map.",
            "distance":"0.1 mi",
            "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_1632,y_1224/v1433342744/anwchje8oi6zjldxb04q.jpg"
        };
        const detailsClickHandlerMock = jest.fn();
        const isSelected = true;
        const wrapper = shallow(<SearchResultsItem
            data={itemData}
            isSelected={isSelected}
            detailsClickHandler={detailsClickHandlerMock}
        />);

        wrapper.find('button').simulate('click');
        expect(detailsClickHandlerMock.mock.calls.length).toEqual(1);
    });
});